import express from 'express';
import checkNumParam from './check_img_param';
import resizeImage from '../../utilities/resize_image';
import fs from 'fs';

//middleware
const checkInputAndReturnRespond = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  let fileName = '';
  let width = 0;
  let height = 0;
  let message = '';

  // Check query parameters
  function checkInput(qParam: Record<string, string>): string {
    let errorMessage = ''; // ok
    if ('width' in qParam) {
      width = checkNumParam(qParam['width']); //check if input is valid number
      if (!width) {
        errorMessage +=
          'The width of the image should only be a number greater than zero.<p>';
      }
    } else errorMessage += 'The width is absent.<p>';
    if ('height' in qParam) {
      height = checkNumParam(qParam['height']); //check if input is valid number
      if (!height) {
        errorMessage +=
          'The heigh of the image should only be a number greater than zero.<p>';
      }
    } else errorMessage += 'The height is absent.<p>';
    if ('filename' in qParam) {
      fileName = String(qParam['filename']);
      if (!fileName) {
        errorMessage += 'The name of the image can not be empty.<p>';
      }
    } else errorMessage += 'You forgot to write the name of the image.<p>';
    return errorMessage;
  }

  const notExist = 0;
  const notInCache = 1;
  const inCache = 2;

  // Checking original file and cache file
  function checkFileExist(): number {
    if (fs.existsSync(originalIimage)) {
      if (fs.existsSync(cacheImage)) {
        return inCache; //cache file exist
      } else {
        return notInCache; //cache file does not exist
      }
    } else {
      return notExist; //original file does not exist
    }
  }

  //Display image on api/image end point
  const errorMessage = checkInput(req.query as Record<string, string>);
  if (errorMessage != '') {
    res.send(errorMessage);
    return;
  }

  const originalIimage = `./images/original/${fileName}.jpg`;
  const resizedImage = `${fileName}_${width}x${height}.jpg`;
  const cacheImage = `./images/process_images/${resizedImage}`;
  const fileExist = checkFileExist();
  if (!fileExist) {
    res.send(`File ${originalIimage} does not exist.<p>`);
    return;
  }

  // ok
  if (fileExist === notInCache) {
    await resizeImage(fileName, width, height);
  } else {
    console.log('Using an image from the cache');
  }
  message += '<h2 style="text-align:center">Good job!';
  const style =
    'style="display: block; margin-left: auto; margin-right: auto;border: 5px solid #ddd; border-radius: 4px; padding:16px"';
  message += `<img src="/api/images/${resizedImage}" ${style}>`;
  res.send(message);
};

export default checkInputAndReturnRespond;
