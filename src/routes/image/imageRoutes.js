const { Router } = require("express");
const {
  uploadImageController,
  getAllImagesController,
} = require("../../controllers/image/imageController");
const { upload } = require("../../utils/fileUpload");
const imageRouter = Router();
// upload image route
imageRouter.post("/upload", upload.single("file"), uploadImageController);
imageRouter.get("/images", getAllImagesController);
module.exports = imageRouter;
