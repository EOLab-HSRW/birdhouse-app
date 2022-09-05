const api = "http://localhost:5000"

// export const addImage = (data) =>
//     fetch(`${api}/api/v1/add-image`, {
//         method: 'POST',
//         body: data,
//     })

export const getImages = (id) =>
    fetch(`${api}/api/v1/image/getAll/${id}`, {
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
