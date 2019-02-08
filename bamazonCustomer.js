// require MySQL
// install npm install mysql
var mysql = require("mysql");

// requre inquirer
// install npm install inquirer
var inquirer = require("inquirer");

var totalAmount;

// make variable for connection to mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: " ",
    database: "bamazon_db"
});

// create connection.connect with call back function
connection.connect(function(err){
    if (err) throw err;
    console.log("connection as id" + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for(i=0;i<res.length;i++){
        console.log('Item ID:' + res[i].item_id + ' Product Name: ' + res[i].product_name + ' Price: ' + '$' + res[i].price + '(Quantity left: ' + res[i].stock_quantity + ')')
      };
       buyProduct();
    });
  }

  

  function buyProduct(){
    inquirer
    .prompt([
      {
        name: "product",
        type: "input",
        message: "What product id would like to purchase?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units of this product would you like? ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer){
  
      var chosenItem = answer.product;
      var chosenQuantity = answer.quantity;
      // var chosenIndex = parseInt(chosenItem)-1;
      console.log(chosenItem);
      console.log(chosenQuantity);
      connection.query( "SELECT * FROM products WHERE item_id = ?", [answer.product], function(err,res){
        if(err) throw err;
        console.log(res)
        if(answer.quantity  <= res[0].stock_quantity){
          var newQuantity = res[0].stock_quantity - chosenQuantity;
          connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [newQuantity, chosenItem])
          totalAmount = res[0].price * answer.quantity;
          console.log("Thank you for your purchase!");
          console.log("Your total amount is $" + totalAmount);
      
        }
        else {
          console.log("Sorry Insufficient Quantity")
        }

        
      })
    })
  };