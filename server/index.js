import express from 'express';
import connectdb from './ConnectDB.js';
import router from './routes/user.route.js';
import cors from 'cors';
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// Enable CORS
app.use(
    cors({
        origin: " http://localhost:5174", // Your frontend origin
        methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
        credentials: true, // If you need to send cookies
    })
);


app.use("/digiplay/signup", router);
app.listen(PORT, async () => {
    console.log("Server is running on http://localhost:", PORT);
    connectdb();
})