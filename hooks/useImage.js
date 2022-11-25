import { processImageFile } from "@utils/image"

const useImage = () => {

    /**
     * This function takes a file object, and returns a promise that resolves to an image object.
     * @param file - The file object that you get from the input element.
     */
    const readImageFromDevice = async (file) => {
        const image = await processImageFile(file)
        console.log(image)
    }

    return {
        readImageFromDevice
    }

}

export default useImage