import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { resizeImage } from './ImageManipulationService'
import bodyParser from 'body-parser';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.post('/resizeImage', (req: Request, res: Response) => {
    resizeImage("bojan.jpg")
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})