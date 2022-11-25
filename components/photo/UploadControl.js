import useImage from "@hooks/useImage"
import { useEffect } from "react";

const UploadControl = ({ children }) => {

    const { readImageFromDevice } = useImage()

    useEffect(() => {
        console.log(useImage)
    }, []);

    const handleFile = ({ target: { files } }) => {
        const loadedImage = files[0];
        readImageFromDevice(loadedImage)
    };

    return <label htmlFor="formId">
        <input
            type="file"
            id="formId"
            hidden
            accept="image/x-png,image/gif,image/jpeg"
            onChange={handleFile} />
        {children}
    </label>;
}

export default UploadControl;