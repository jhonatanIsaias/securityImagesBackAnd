import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import path from 'path';
import multerConfig from '../config/multer';
import mime from 'mime';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const BucketName = process.env.BUCKET_NAME;
const BucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

class S3Storage{
  private client : S3Client;

  constructor(){
    this.client = new S3Client({
        region:BucketRegion,
      
        credentials:{
            accessKeyId:accessKey,
            secretAccessKey:secretAccessKey
        
        }
    });
  }
  
  async saveFile(filename: string):Promise<void>{
    const originalPath = path.resolve(multerConfig.directory,filename);

    const ContentType = mime.getType(originalPath);

    if(!ContentType){
        throw new Error('conteudo não identificado');
    }

    const fileContent = await fs.promises.readFile(originalPath);
    
    await this.client.send(new PutObjectCommand({
        Bucket:BucketName,
        Key:filename,
        Body:fileContent,
        ContentType,

    }));
    await fs.promises.unlink(originalPath);

  }
}

export default new S3Storage;