// Dependencies
// =============================================================
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


// Require the sequelize library
// Require the connection to the database (connection.js)

// Create a "Book" model with the following configuration
var Book = sequelize.define("book", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER
})

Book.sync();

module.exports = Book;
// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB

// Export the book model for other files to use
