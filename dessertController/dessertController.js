const desserts = [
    { name: "Funnel Cake",
     calorie: "1580", 
     price: "$12.99" },
    { name: "Cheesecake", 
     calorie: "1330", 
     price: "$12.99" },
    { name: "Green Tea Ice Cream", 
     calorie: "530", 
     price: "$5.99" },
     { name: "Red Bean Ice Cream",
     calorie: "480", 
     price: "$4.99" },
    { name: "Apple Pie", 
     calorie: "830", 
     price: "$10.99" },
    { name: "Strawberry Pie", 
     calorie: "1000", 
     price: "$11.99" },
  ];
  
  

const getDessert = (req , res) => {
    res.send(desserts)
}

const getDessertById = (req , res) => {
    res.send(desserts[req.params.id])
}


module.exports = {
    getDessert,
    getDessertById,
  }
  