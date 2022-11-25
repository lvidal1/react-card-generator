import { processImageFile } from "@utils/image"

const useImage = () => {

    const readImageFromDevice = async (file) => {
        const image = await processImageFile(file)
        console.log(image)
    }

    return {
        readImageFromDevice
    }

}

export default useImage