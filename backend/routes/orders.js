// backend/routes/orders.js
const express = require('express');
const router = express.Router();
const db = require('../database');

// Create an order
router.post('/', (req, res) => {
    const { customerID, totalAmount, products } = req.body;
    const query = 'INSERT INTO Orders (CustomerID, TotalAmount, OrderDate, Status) VALUES (?, ?, NOW(), "pending")';
    
    db.query(query, [customerID, totalAmount], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        } 
        const orderID = results.insertId;
        
        // Add products to order details
        products.forEach((product) => {
            const detailQuery = 'INSERT INTO OrderDetails (OrderID, ProductID, Quantity, Price) VALUES (?, ?, ?, ?)';
            db.query(detailQuery, [orderID, product.ProductID, product.Quantity, product.Price], (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
        });

        res.status(201).json({ message: 'Order placed successfully', orderID });
    });
});

module.exports = router;
