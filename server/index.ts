import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './router/index';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json()); 
app.use('/api', router);



const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()