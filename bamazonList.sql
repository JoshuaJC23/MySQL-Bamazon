-- Create DATABASE
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

-- Create Table
CREATE TABLE products(
-- create Columns
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(90)  NOT NULL,
department_name VARCHAR(90) NOT NULL,
price DECIMAL(5,2) NOT NULL,
stock_quantity INT(10)
);

-- insert items into columns
INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("Slinkey", "Toys", 15.50, 77);

INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("Tent", "Outdoors", 215.00, 50);

INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("Fishing Pole", "Outdoors", 120.95, 25);

INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("Car Freshener", "Automotive", 3.75, 100);

INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("XBOX", "Electronics", 275.50, 65);

INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "Electronics", 75.00, 37);

INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("Apples To Apples", "Games", 50.50, 61);

INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 325.50, 20);

INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("BYU Hat", "Clothes", 24.95, 112);

INSERT INTO bamazon_db (product_name, department_name, price, stock_quantity)
VALUES ("The Truman Show", "Electronics", 7.50, 9);