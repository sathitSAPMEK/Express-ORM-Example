import express from 'express';
import router from './routes';
import config from './config/constants';

// สร้าง instance express ไว้ในตัวแปร app
const app = express();
app.use(express.json());
// กำหนด middleware โดยใช้ Path Pattern
// ทุก request จะต้องมี path ที่ขึ้นต้นด้วย ค่าที่เรา config ไว้ในไฟล์ constants
app.use(config.prefix, router);

// run instance web server โดยใช้ port ที่อยู่ในไฟล์ constants ของเรา
app.listen(config.port, () =>{
    console.log(`Server is running http://localhost:${config.port} ENV: ${app.get('env')}`);
})