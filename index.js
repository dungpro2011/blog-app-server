import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js'
import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URL = "mongodb+srv://admin:dung12345678@cluster0.3yrkzwx.mongodb.net/?retryWrites=true&w=majority";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.use('/post', posts);

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log('Connected to DB');
        app.listen(PORT, ()=> {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((err) => {
        console.log('err', err);
    })

