const { text } = require("express");

module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  var Post = sequelize.define("Post", {
    title: {
      type: String,
      allowNull: false,
      validate: {
        len: [1,160]
      }
    },
    body: {
      type: text,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    category: {
      type: String,
      defaultValue: "Personal"
    }
  });

  return Post;
};
