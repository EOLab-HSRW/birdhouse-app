import React, { Component } from 'react'
import Photo from '../../components/Photo/Photo'
import { getAll } from '../../ImageAPI';

export default class Gallary extends Component {
    
    state = {
        images: [],
    }

    async componentDidMount() {
        await getAll()
        .then(res => res.data)
        .then((images) => {
            this.setState(() => ({
                images
            }))
        })
    }

    render() {
        const {images} = this.state
        return (
        <div>
           {images && images.map((image, i) => (
            <Photo key={i} image={image.fileName}/>
           ))}
        </div>
        )
    }
}
