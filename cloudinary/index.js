var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storages = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Arts",
    allowedFormats: ["jpeg", "png", "jpg", "pdf"],
  },
});

module.exports = {
  cloudinary,
  storages,
};
