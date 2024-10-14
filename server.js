const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res)=> {
    

    res.render("index", {
        nombre:"Carlos",
        comida:"pizza"
    });
});

const products =[
    {
        id: 1,
        
        name: "lavadora",
        price: 8000,
    },{
        id: 2,
        name: "refrigerador",
    price:9000,      
  }, {
    id: 3,
    name: "estufa",
price:6500,      
   }
]

app.get("/productos", (req, res)=> {
    
    res.render("productos", {products})
});



app.get("/productos/:id" , (req, res)=> {
    if(req.params.id > products.length){
        res.send("el id no existe");
    }
    
    res.send(products[req.params.id]);
});

app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000");

});