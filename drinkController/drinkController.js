const drinks = [
    { name: "Green Tea Latte",
      calorie: "240",
      price: "$4.50",},
    { name: "Cappuccino",
      calorie: "150",
      price: "$3.99" },
    { name: "Smoothie",
      calorie: "350",
      price: "$5.99" },
    { name: "Iced Americano",
      calorie: "15",
      price: "$2.99" },
    { name: "Bubble Tea",
      calorie: "500",
      price: "$5.50" },
    { name: "Lemonade",
      calorie: "120",
      price: "$2.50" },
  ];

const getDrink = (req , res) => {
    res.send(drinks)
}

const getDrinkById = (req , res) => {
    res.send(drinks[req.params.id])
}

module.exports = {
    getDrink,
    getDrinkById,
}
