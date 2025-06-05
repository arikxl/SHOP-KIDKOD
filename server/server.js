import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


import productsRoutes from './routes/products.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productsRoutes )


app.listen(5000, () => {
    console.log('Server is running on port 5000')
 })