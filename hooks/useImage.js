import { useDispatch } from "react-redux";

import { processImageFile } from "@utils/image"
import { setRawPhoto, resetRawPhoto } from "@store/slices/photo";

const useImage = () => {
    const dispatch = useDispatch();

    /**
     * This function takes a file, processes it, and then dispatches the processed file to the redux
     * store.
     * @param file - The file object that is returned from the file input
     */
    const readImageFromDevice = async (file) => {
        dispatch(resetRawPhoto());
        const image = await processImageFile(file)
        dispatch(setRawPhoto(image));
    }

    return {
        readImageFromDevice
    }

}

export default useImage