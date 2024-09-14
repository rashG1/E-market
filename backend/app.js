const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products'); // Your product route
const orderRoutes = require('./routes/orders'); // Your order route

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes); // Use the product route
app.use('/api/orders', orderRoutes); // Use the order route

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
