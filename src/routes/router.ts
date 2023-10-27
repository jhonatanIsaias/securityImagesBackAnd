import { Router, response } from "express";
import UploadImagesService from "../services/UploadImagesService";

const router = Router();

router.post("/", async (req,res) =>{
      await UploadImagesService.excute();

      return response.send();
})