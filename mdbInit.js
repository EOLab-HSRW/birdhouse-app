db = db.getSiblingDB("test")

db.users.insert({
	username: "admin",
	password: "$2b$10$7WCXDJ56W9afRcXVtkOB5Ola0OCSDU93X7V9QPIfEK0psZmVb/FdS",
})
