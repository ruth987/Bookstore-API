const express = require('express');
const mongoose = require('mongoose');
const book = require('./models/book.model.js');
const bookRoute = require('./routes/book.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/books', bookRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect('mongodb+srv://ruthwossen75:OiHsB587fU2Jxrb7@cluster0.volsuk6.mongodb.net/book-store-api?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
        console.log('Server is running ');
    });
})
.catch(() => {
    console.log('Connection failed');
});
