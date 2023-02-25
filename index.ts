
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { resizeImage } from './ImageManipulationService'
import bodyParser from 'body-parser';
import {productRoutes} from './product/routes/productRoutes';
import morgan from 'morgan'
import path from 'path'
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'))
// Function to serve all static files
// inside public directory.
app.use('/images', express.static('images'));

app.use('/', productRoutes); //to use the product routes

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})