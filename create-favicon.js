const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to the source image
const sourcePath = path.join(__dirname, 'public', '213123122131.png');
// Path to save the resized image
const destPath = path.join(__dirname, 'public', 'favicon.ico');

async function createFavicon() {
  try {
    // Resize the image to 32x32 pixels (standard favicon size)
    await sharp(sourcePath)
      .resize(32, 32)
      .toFile(destPath);
    
    console.log('Favicon created successfully at', destPath);
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon(); 