# Convert To Webp

This will convert JPG, JPEG, PNG files to WEBP

## How to use

Clone Repo
```shell
npm install
```

Put applicable images to convert into the `to-convert` folder

```shell
node index
```
The new images will appear in the `converted` folder

Based on testing there are 2 processes, 1 for PNGs and 1 for JPGs.
- The PNG retain 100% of the quality and are still lossless.
- The JPG, JPEG are 75% quality and not lossless.  Comparing the 2 there is either no noticable drop or very slight depending on the image.


