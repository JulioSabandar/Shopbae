'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class Product extends Model {}
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        notNegative(value){
          if(value < 0) {
            throw new Error('Price/Stock cannot be negative!');
          }
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        notNegative(value){
          if(value < 0){
            throw new Error('Price/Stock cannot be negative!');
          }
        }  
      }
    },
  }, { sequelize });
  Product.associate = function(models) {
    // associations can be defined here
    // Product.hasMany(models.Order);
    Product.belongsToMany(models.Customer,{ through: models.Order })
  };
  return Product;
};