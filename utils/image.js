/**
 * It takes a file, reads it as a data URL, and returns a promise that resolves with an object
 * containing file information
 * @param file - The file to read
 * @returns A promise that resolves to an object with the file data, name, size, and type.
 */
const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            resolve({ data: reader.result, name: file.name, size: file.size, type: file.type });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    })
}

/**
 * Create a new Promise that resolves with a dataurl of the resized image when the image has loaded.
 * @param source - The image source (either a data URL or a URL pointing to an image)
 * @param type - The type of the image.
 * @returns A promise that resolves to a dataurl.
 */
const loadImageAsync = (source, type) => {
    return new Promise((resolve, reject) => {
        const image = document.createElement("img");
        image.onload = function () {
            const dataurl = resize(image, type);
            resolve(dataurl);
        }
        image.src = source;
    })
}

/**
 * Resize an image
 * @param image - The image element to resize
 * @param type - The type of the image.
 * @returns A data URL representing the image in the format specified by the type parameter (defaults
 * to PNG).
 */
const resize = (image, type) => {
    // Dynamically create a canvas element
    const MAX_WIDTH = 300;
    const MAX_HEIGHT = 300;

    let width = image.width;
    let height = image.height;

    // Change the resizing logic
    if (width > height) {
        if (width > MAX_WIDTH) {
            height = height * (MAX_WIDTH / width);
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width = width * (MAX_HEIGHT / height);
            height = MAX_HEIGHT;
        }
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, width, height);

    // Show resized image in preview element
    return canvas.toDataURL(type);
}

/**
 * It takes a file, reads it, and then loads it into an image object (resize).
 * @param file - The file object that you get from the input element.
 * @returns The image data is being returned.
 */
export const processImageFile = async (file) => {

    try {
        let { data, type } = await readFileAsync(file);
        return await loadImageAsync(data, type);
    } catch (err) {
        console.log(err);
    }
}
