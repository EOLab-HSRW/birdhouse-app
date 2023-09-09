
const api = process.env.PROXY_API || 'http://localhost:8080'

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
