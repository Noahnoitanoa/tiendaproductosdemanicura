//import { storage } from "..";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 } from "uuid";

export const useImageStorage = () => {
    const uploadImage = (image) => {
        return new Promise((resolve, reject) => {
            const imageRef = ref(ref, `images/products/${image.name + v4()}`)
            uploadBytes(imageRef, image)
                .then(response => {
                    getDownloadURL(response.ref).then(url => {
                        resolve(url)
                    })
                })
                .catch(error=> {
                    reject(error)
                })
        })
    }

    const deleteImage = (imageUrl) => {
        return new Promise((resolve, reject) => {
            const imageRef = ref(ref, imageUrl)
            deleteObject(imageRef)
                .then(() => {
                    resolve(true)
                })
                .catch(error => {
                    reject(error)
                })
        })


    }

    return {
        uploadImage,
        deleteImage
    }
}