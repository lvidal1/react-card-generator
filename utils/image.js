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

const loadImageAsync = (source, type) => {
    return new Promise((resolve, reject) => {
        const image = document.createElement("img");
        image.onload = function (event) {
            const dataurl = resize(image, type);
            resolve(dataurl);
        }
        image.src = source;
    })
}

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

export const processImageFile = async (file) => {

    try {
        let { data, type } = await readFileAsync(file);
        return await loadImageAsync(data, type);
    } catch (err) {
        console.log(err);
    }
}
