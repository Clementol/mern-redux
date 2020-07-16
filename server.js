const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const chalk = require('chalk');
const path = require('path')
const morgan = require('morgan')
require('dotenv').config();
const items = require('./api/items')
const addItem = require('./api/add-item');


const app = express()
const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.json())

app.use(morgan('tiny'))
//Connect to mongoDb Atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true} )
    .then( () => console.log(chalk.bgWhite.blue("MongoDB database connection established successfully")) )
    .catch( err => console.log(chalk.bgRed.white(err)) )



//Use routes to get items list
app.use('/api/items', items)

//Routes to create new item
app.use('/api/add-item', addItem)

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('my-app'))
    app.set('build engine', 'js')
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'my-app', 'build', 'server',
        'static', 'development', 'pages', 'index.js'))
    } )
    // appget.('*', (req, res) => {
    //      res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'server',
    //      'static', 'development', 'index.js'))
    // })
}

app.listen(PORT, () => {
    console.log(chalk.bgWhite.blue(`Server is running on port: ${PORT}`))
})
