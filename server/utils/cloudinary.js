const cloudinary = require("cloudinary").v2;
const fs = require("fs");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudniary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary server
    console.log(localFilePath);
    const res = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //success
    console.log("File upload successful !", res.url);
    return res;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally save file in case of failure of the file upload;
  }
};
module.exports = uploadOnCloudniary;
