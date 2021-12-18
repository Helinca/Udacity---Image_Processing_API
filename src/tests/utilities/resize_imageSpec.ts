import path from 'path';
import fs from 'fs';
import resizeImage from '../../utilities/resize_image';

//
describe('Test resizeImage', () => {
  it('Testing that resized image was saved', async () => {
    const imagePath = path.join(
      process.cwd(),
      './images/process_images/',
      'Chinese_garden_400x300.jpg'
    );
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
    await resizeImage('Chinese_garden', 400, 300); //?filename=Chinese_garden&width=400&height=300
    const fileExist = fs.existsSync(imagePath);
    expect(fileExist).toBeTruthy();
  });
});
