'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class Customer extends Model{}
  Customer.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    credit: {
      type: DataTypes.INTEGER,
      validate: {
        isNotNegative(value){
          if(value < 0){
            throw new Error('Your credits cannot be less than 0');
          }
        }
      }
    }
  }, 
  { 
    sequelize,
    hooks: {
      beforeCreate(customer, option){
        customer.credit = 1000000;
      }
    }
  })
  Customer.associate = function(models) {
    // associations can be defined here
    // Customer.hasMany(models.Order);
    Customer.belongsToMany(models.Product,{ through: models.Order })
  };
  return Customer;
};