// require MySQL
// install npm install mysql
var mysql = require("mysql");

// requre inquirer
// install npm install inquirer
var inquirer = require("inquirer");

// make variable for connection to mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sports_nut23",
    database: "bamazon_db"
});

// create connection.connect with call back function
connection.connect(function(err){
    if (err) throw err;
    console.log("connection as id" + connection.threadId);
    afterConnection();
    buyProduct();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  }

  // function start(){
  //   inquirer
  //   .prompt({
  //     name: "buyOrReturn",
  //     type: "list",
  //     message: "Would like to [Buy] product or [Return] product?",
  //     choices:["Buy", "Return"]
  //   })
  //   .then(function(answer){
  //     if(answer.buyOrReturn === "Buy"){
  //       buyProduct();
  //     }
  //     else if(answer.buyOrReturn === "Return"){
  //       returnProduct();
  //     }
  //     else{
  //       console.log("Please come again soon!")
  //     }
  //   })
  // }

  function buyProduct(){
    inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What item number would like to purchase?"
      },
      {
        name: "category",
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
    .then(function(){
      // console.log(answer);
      connection.query( "SELECT FROM products", function(err,res){
        for(var i = 0; i < res.length; i++){
          console.log(res[i].id + "|" + res[i].stock_quantity);
        }
        // if (answer.category > res[i].stock_quantity){
        //   console.log("Sorry Insufficient Quantity")
        // }
      }


      )
    })
  };