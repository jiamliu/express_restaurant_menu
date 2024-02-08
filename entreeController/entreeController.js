const entrees = [
    { name: "Grilled Ribeye Steak",
      calorie: "950",
      price: "$29.99" },
    { name: "Baked Lobster Tail",
      calorie: "430",
      price: "$35.99" },
    { name: "Chicken Alfredo Pasta",
      calorie: "1200",
      price: "$19.99" },
    { name: "Seared Salmon",
      calorie: "700",
      price: "$24.99" },
    { name: "Vegetable Stir Fry",
      calorie: "550",
      price: "$14.99" },
    { name: "Roast Chicken",
      calorie: "800",
      price: "$18.99" },
    { name: "Beef Tacos",
      calorie: "750",
      price: "$12.99" },
    { name: "Pork Belly Ramen",
      calorie: "900",
      price: "$16.99" },
    { name: "Duck Confit",
      calorie: "1100",
      price: "$27.99" },
    { name: "Vegan Mushroom Risotto",
      calorie: "650",
      price: "$17.99" },
    { name: "Lamb Shank",
      calorie: "980",
      price: "$31.99" },
    { name: "Seafood Paella",
      calorie: "840",
      price: "$26.99" },
    { name: "Quinoa Salad with Roasted Vegetables",
      calorie: "410",
      price: "$13.99" },
    { name: "Beef Wellington",
      calorie: "1200",
      price: "$34.99" },
    { name: "Grilled Portobello Mushrooms",
      calorie: "320",
      price: "$15.99" },
  ];

const getEntree = (req , res) => {
    res.send(entrees)
}

const getEntreeById = (req , res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntree,
    getEntreeById,
}
