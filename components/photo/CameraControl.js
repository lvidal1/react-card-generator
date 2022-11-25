import useImage from "@hooks/useImage";
import { useState } from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import styles from "@styles/CameraControl.module.css";

const CameraControl = ({ children }) => {
	const { readImageFromCamera } = useImage();
	const [openCamera, setOpenCamera] = useState(false);

	const handleTakePhotoAnimationDone = (dataUri) => {
		setOpenCamera(false);
	};

	const handleTakePhoto = (dataUri) => {
		readImageFromCamera(dataUri);
	};

	const [fullScreen, setFullScreen] = useState(false);

	return (
		<>
			<div onClick={() => setOpenCamera(true)}>{children}</div>
			{openCamera && (
				<div className="fixed w-full h-full top-0 left-0 bg-black flex items-center justify-center">
					<div className={styles.cameraControl}>
						<Camera
							onTakePhoto={handleTakePhoto}
							idealFacingMode={FACING_MODES.ENVIRONMENT}
							onTakePhotoAnimationDone={
								handleTakePhotoAnimationDone
							}
							isFullscreen={fullScreen}
							idealResolution={
								fullScreen ? { width: 360, height: 740 } : {}
							}
							imageCompression={0.97}
							sizeFactor={1}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default CameraControl;
