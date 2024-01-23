import imageCompression from 'browser-image-compression';


export const parseJSON = (d, or = {}) => {
    try {
        return JSON.parse(d)
    } catch (e) {
        return or
    }
}


export const getFilePathFromGalleryImage = (file) => {
    const backend_url = process.env.backend_url;
    const base_path = file[0]?.path?.split('uploaded_files')[1];
    return backend_url + "uploaded_files" + base_path;
}



export function objectToKeyValuePair(obj) {
    let details = [];
    const keys = Object?.keys(obj);
    const values = Object?.values(obj);f
    for (let i = 0; i < keys?.length; i++) {
        details.push(
            {
                key: keys[i],
                value: values[i],
            }
        )
    }
    return details;
}

export function capitalizeFirstLetter(string) {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}


export function handleImageUploadCompression(e) {
    const imageFile = e
    const options = {
        maxSizeMB: 2,
        maxWidthOrHeight: 1920,
        useWebWorker: true
    }
    const myImg = imageCompression(imageFile, options)
    console.log(myImg)
    return myImg
}