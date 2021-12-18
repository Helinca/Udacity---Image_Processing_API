import sharp from 'sharp';
//resize the image using the sharp library
//parameters was entered in the query string

const resizeImage = async (
  imageName: string,
  newWidth: number,
  newHeight: number
): Promise<void> => {
  try {
    const originalIimage = `./images/original/${imageName}.jpg`;
    const resizedImage = `./images/process_images/${imageName}_${newWidth}x${newHeight}.jpg`;
    await sharp(originalIimage)
      .resize(newWidth, newHeight)
      .toFile(resizedImage);
    console.log(`${originalIimage} was resized and saved to ${resizedImage}`);
    // }
  } catch (error) {
    console.log(error);
  }
};

export default resizeImage;
