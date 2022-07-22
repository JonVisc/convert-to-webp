import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

imagemin(['./to-convert/*.png'], {
    destination: './converted/',
    plugins: [
        imageminWebp({
            quality: 100,
            lossless: true
        }),
    ],
}).then(() => {
  console.log('PNG Images Converted Successfully!!!');
});

imagemin(['./to-convert/*.{jpg, jpeg}'], {
    destination: './converted/',
    plugins: [
        imageminWebp({
            quality: 75,
            lossless: false
        }),
    ],
}).then(() => {
  console.log('JPG Images Converted Successfully!!!');
});