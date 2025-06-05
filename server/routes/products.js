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
    queueLimit:0
})



// GET ALL PRODUCTS FROM DB
router.get('/', async (req, res) => {
    try {

        const [products] = await db.query("SELECT * FROM products")
        res.json(products)
        console.log(products)
    } catch(error) { 
        console.log("Database ERROR: ", error)
        res.status(500).json({error: 'Failed to fetch products'})
    }
} )










export default router