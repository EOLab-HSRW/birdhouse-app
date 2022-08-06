const api = "http://localhost:5000"

// export const addImage = (data) =>
//     fetch(`${api}/api/v1/add-image`, {
//         method: 'POST',
//         body: data,
//     })

export const getAll = () =>
    fetch(`${api}/api/v1/getAll`, {
        method: 'GET',
    })
    .then(res => res.json())

export const imagePreview = (id) =>{
    return `${api}/image/${id}`
}