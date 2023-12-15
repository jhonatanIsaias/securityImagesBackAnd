import multer from "multer";
import path from "path";
import crypto from "crypto";


const tempFolder = path.resolve(__dirname,"..","..","tmp");
export default {
    directory:tempFolder,
    storage: multer.diskStorage({
        destination:tempFolder,
        filename(req, file, callback) {
            const fileHash = crypto.randomBytes(5).toString("hex");
            const fileName = `${file.originalname}-${fileHash}`;
                
            return callback(null,fileName);
        },
    })
}