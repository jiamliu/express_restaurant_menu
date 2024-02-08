const express = require('express')
const cors = require('cors')
const appetizerController = require('./appetizerController/appetizerController.js')
const dessertController = require('./dessertController/dessertController.js')
const drinkController = require('./drinkController/drinkController.js')
const entreeController = require('./entreeController/entreeController.js')

const PORT = process.env.PORT || 3003

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Welcome to our menu")
  })

//index list route for appetizer
app.get('/appetizers', appetizerController.getAppetizer)
//detail info route for appetizer
app.get('/appetizers/:id' ,appetizerController.getAppetizerById)

// For Desserts
app.get('/desserts', dessertController.getDessert);
app.get('/desserts/:id', dessertController.getDessertById);

// For Drinks
app.get('/drinks', drinkController.getDrink);
app.get('/drinks/:id', drinkController.getDrinkById);

// For Entrees
app.get('/entrees', entreeController.getEntree);
app.get('/entrees/:id', entreeController.getEntreeById);
