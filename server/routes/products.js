import express from 'express'

import mysql from 'mysql2/promise'

const router = express.Router()

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack-shop',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})



// GET ALL PRODUCTS FROM DB
router.get('/', async (req, res) => {
    try {

        const [products] = await db.query("SELECT * FROM products")
        res.json(products)
        console.log(products)
    } catch (error) {
        console.log("Database ERROR: ", error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
})



// CREATE NEW PRODUCT

router.post('/create', async (req, res) => {

    try {

        const sql = `INSERT INTO products
        ( id, title, brand, category, type, img1, img2, price, stock, description, isOnSale)
         VALUES (?,?,?,?,?,?,?,?,?,?,?)`;

        const values = [
            req.body.id, req.body.title, req.body.brand, req.body.category, req.body.type, req.body.img1,
            req.body.img2, req.body.price, req.body.stock, req.body.description, req.body.isOnSale
        ];

        const [product] = await db.execute(sql, values);
        res.status(201).json({ message: 'Added New Product!', product });
        
        

    } catch (error) {
        console.log(error, "Error Insert new product!");
        res.status(500).json({ error: 'Error Insert new product! - SERVER' })
    }

})







export default router