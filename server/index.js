import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import articleRoutes from './routes/article.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config()

///////MongoDB atlas ( Denna ligger i DOTENV, bara synligt för testets skull)///////

////const CONNECTION_URL = 'mongodb+srv://database:database1234@cluster0.xutdalh.mongodb.net/?retryWrites=true&w=majority'

////DOTENV ( Denna ligger i DOTENV, bara synligt för testets skull)////
const PORT = 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true})
    .then(() => app.listen(5000, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error)); 

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use('/', articleRoutes);
