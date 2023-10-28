import { Router } from "express";
import UploadImagesService from "../services/UploadImagesService";
import multer from "multer";
import multerconfig from "../config/multer";

const router = Router();
const upload = multer(multerconfig);

router.post("/",upload.single('image'), async (req,res) =>{
      const {file} = req;
      if(!file){
            throw new Error('objeto não encontrado');
      }
      await UploadImagesService.execute(file);
            
      return res.send();
})

export default router;