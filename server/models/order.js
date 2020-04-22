'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class Order extends Model {}
  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {sequelize})
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Customer);
    Order.belongsTo(models.Product);
  };
  return Order;
};