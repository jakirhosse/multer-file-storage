
const imageModel = require("../../model/image/imageModel");

const uploadImageService = async (file) => {
        const {filename,path} = file;
        const newImage = new imageModel({filename,path});
        await newImage.save();
        const url = `${process.env.}/${path}`;
        console.log(path );
        return{
                message:"image upload successfully",
                Image:url
        }
}

const getAllImageService = async () => {
        const allImages = await imageModel.find()
        return allImages
}

const getSingleImage  = async (imageName) => {
        const getImage = await imageModel.findOne({filename:imageName})
        return getImage
}
      module.exports = {
        uploadImageService,
        getAllImageService,
        getSingleImage,
      };