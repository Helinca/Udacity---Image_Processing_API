


> 
# Image Processing API project (Udacity) by Elena Kochepasova
## Overview
The objective of the project was to create an image processing API to display resized image provided by the user with the name and size set via URL parameters .
> ***For example:** "?filename=Chinese_garden&width=400&height=300"*

The original image will be resized to fit the new dimensions.

## How to work with the project.

 **1.** Install all dependencies:      

>  ***npm install***

 **2.** Compiling the code from typescript to java script in build folder:     

> ***"npm run build"***

 **3.** Starting the server and display resizing image on the endpoint:
    

>  ***"npm run start"*** - start the server at http://localhost:3000

 **App functionality.** After the server is started you can choose  a filename , width, and height by typing at URL in the browser string.
 > ***For example:** "http://localhost:3000/api/images?filename=Chinese_garden&width=400&height=300"*
 > 
This will upload a file **Chinese_garden.jpg** from the ***./images*** directory and display it with the new width and height and save the new file under the name **Chinese_garden_400x300.jpg** in the ***./images/process_images*** directory.



 **4.** Running the jasmine test:  

> ***"npm run test"***

 

 - The first test:
          testing end point  for returning code 200.
 - The second test: 
        testing  that resized image was saved.

  **5.** Also the following scripts have been provided: 
  > ***"npm run prettier"
>    "npm run lint"******


