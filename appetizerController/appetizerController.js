const appetizers = [
    { name: "Fried Shrimp",
     calorie: "580", 
     price: "$14.99" },
    { name: "Clam Chowder", 
     calorie: "630", 
     price: "$10.99" },
    { name: "Fried Calamari", 
     calorie: "750", 
     price: "$10.99" },
    { name: "Crab Cake",
     calorie: "580", 
     price: "$19.99" },
    { name: "King Oyster", 
     calorie: "330", 
     price: "$12.99" },
    { name: "Chicken Wings", 
     calorie: "730", 
     price: "$9.99" },
     { name: "Beef Skewer",
     calorie: "1080", 
     price: "$15.99" },
    { name: "Boneless Wings", 
     calorie: "630", 
     price: "$10.99" },
    { name: "Meatball", 
     calorie: "760", 
     price: "$9.99" },
  ];
  
  

const getAppetizer = (req , res) => {
    res.send(appetizers)
}

const getAppetizerById = (req , res) => {
    res.send(appetizers[req.params.id])
}

module.exports = {
    getAppetizer,
    getAppetizerById,
  }
  