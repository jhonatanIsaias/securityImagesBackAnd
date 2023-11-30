import { Router } from "express";
import UploadImagesService from "../services/UploadImagesService";
import multer from "multer";
import multerconfig from "../config/multer";

const router = Router();
const upload = multer(multerconfig);

router.post("/",upload.single('file'), async (req,res) =>{
    
   
 try{  
       const file = req.file;
       console.log(req.file);
      if(!file){
            throw new Error('objeto não encontrado');
      }
      await UploadImagesService.execute(file);
            
      return res.status(200).json({message:'imagem recebida com sucesso'})
}catch(error){
      console.log(error);
      return res.status(500).send('não foi possivel enviar o arquivo');
}
})

export default router;