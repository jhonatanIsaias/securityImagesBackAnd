import S3Storage from "../utils/S3Storage";

class UploadImagesService{
    async execute(file: Express.Multer.File):Promise<void>{
        await S3Storage.saveFile(file.filename);
    }
}

export default new UploadImagesService;