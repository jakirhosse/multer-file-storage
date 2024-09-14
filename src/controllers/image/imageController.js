const imageService = require("../../services/image/imageServices");

const uploadImageController = async (req, res) => {
  const file = req?.file;
  try {
    const result = await imageService?.uploadImageService(file);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "imahe error" });
  }
};
// get all images
const getAllImagesController = async (req, res) => {
  try {
    const result = await imageService.getAllImageService();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  uploadImageController,
  getAllImagesController,
};
