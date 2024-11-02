const multer = require("multer")
const path = require("path")

const destination = process.env.UPLOAD_DIR || "./uploads"

const fs = require("fs")
if (!fs.existsSync(destination)) {
	fs.mkdirSync(destination, { recursive: true })
}

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, destination)
	},
	filename: (req, file, cb) => {
		// Add additional sanitization for the filename
		const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
		const ext = path.extname(file.originalname).toLowerCase()
		cb(null, `${file.fieldname}_${uniqueSuffix}${ext}`)
	},
})

const fileUpload = multer({
	storage: storage,
	limits: {
		files: 1,
		fileSize: 2 * 1024 * 1024, //2mb
	},
	fileFilter: (req, file, cb) => {
		const allowedMimes = ["image/png", "image/jpg", "image/jpeg"]
		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true)
		} else {
			cb(new Error("Only PNG, JPG or JPEG files are allowed!"), false)
		}
	},
})

module.exports.send = (req, res, next) => {
	fileUpload.single("image")(req, res, (err) => {
		if (err instanceof multer.MulterError) {
			// A Multer error occurred when uploading
			if (err.code === "LIMIT_FILE_SIZE") {
				return res.status(400).json({
					error: "File size too large. Maximum size is 2MB.",
				})
			}
			return res.status(400).json({ error: err.message })
		} else if (err) {
			// An unknown error occurred
			return res.status(400).json({
				error:
					err.message || "Only PNG, JPG or JPEG files are allowed!",
			})
		}

		// Check if file exists
		if (!req.file) {
			return res.status(400).json({
				error: "Please select an image file to upload.",
			})
		}

		// Add file URL to the request
		req.fileUrl = `/uploads/${req.file.filename}`
		next()
	})
}
