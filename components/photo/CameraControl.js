import useImage from "@hooks/useImage";
import { useEffect, useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const CameraControl = ({ children }) => {
	const { readImageFromCamera } = useImage();
	const [openCamera, setOpenCamera] = useState(false);

	useEffect(() => {
		console.log(useImage);
	}, []);

	const handleTakePhotoAnimationDone = (dataUri) => {
		readImageFromCamera(dataUri);
		setOpenCamera(false);
	};

	return (
		<>
			<div onClick={() => setOpenCamera(true)}>{children}</div>
			{openCamera && (
				<Camera
					onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
					isFullscreen={false}
				/>
			)}
		</>
	);
};

export default CameraControl;
