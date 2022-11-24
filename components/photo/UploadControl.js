const UploadControl = ({ children }) => {
    const handleFile = ({ target: { files } }) => {
        const loadedImage = files[0];
        console.log(loadedImage)
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