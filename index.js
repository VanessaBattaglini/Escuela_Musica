import express from 'express';
import router from './routes/router.js';
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use("/", router);

app.listen(PORT, () => { 
    console.log(`El servidor se ha levantado en el port http://localhost:${PORT}`)
});