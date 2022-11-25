import { useDispatch } from "react-redux";

import { processImageFile, processImageUri } from "@utils/image";
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
		const image = await processImageFile(file);
		dispatch(setRawPhoto(image));
	};

	const readImageFromCamera = async (data) => {
		dispatch(resetRawPhoto());
		const image = await processImageUri(data);
		dispatch(setRawPhoto(image));
	};

	return {
		readImageFromDevice,
		readImageFromCamera,
	};
};

export default useImage;
