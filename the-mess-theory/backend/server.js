import express from 'express';
import connectDb from './utils/db.js';
import cors from 'cors';
import router from './routes/auth.js';


const app = express();

connectDb();
// To parse incoming requests with JSON payloads
app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };

app.use(cors(corsOptions));

app.use('/api/auth', router);

const port = 4000;

app.listen(port, () => {
    console.log(`Serve at https://localhost:${port}`);
})