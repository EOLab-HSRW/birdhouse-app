const api = "http://localhost:5000"

// export const addImage = (data) =>
//     fetch(`${api}/api/v1/add-image`, {
//         method: 'POST',
//         body: data,
//     })

export const getImages = () =>
    fetch(`${api}/api/v1/image/getAll`, {
        method: 'GET',
    })
    .then(res => res.json())

export const imagePreview = (id) =>{
    return `${api}/image/${id}`
}

export const getDevices = () =>
    fetch(`${api}/api/v1/Device/getAll`, {
        method: 'GET',
    })
    .then(res => res.json())
