const { Product, Order, Customer } = require('../models');
const { Op } = require("sequelize");
class ProductController {
    static showProducts (req, res, next){
        Product.findAll({order: [['id', 'ASC']]})
        .then((products)=>{
            res.status(200).json({products})
        })
        .catch(next);
    }
    static showCart (req, res, next) {
        Order.findAll({
            where: {CustomerId : req.UserId}, 
            include: {model: Product}
        })
        .then(orders=>{
            res.status(200).json({orders});
        })
        .catch(next)
    }
    static addProductToCart (req, res, next){
        console.log(req.body.ProductId)
        Order.findOne(
            {where: {
                [Op.and]:[
                    {CustomerId: req.UserId},
                    {ProductId: Number(req.body.ProductId)}
                ]
            }
        })
        .then((order)=>{
            console.log(order)
            if(order){
                console.log('update')
                console.log(order.amount)
                console.log(order.id)

                return Order.update({amount: order.amount+1},{where: {id : order.id}, returning: true});
            }
            else{
                console.log('create')
                console.log(req.UserId);
                console.log(req.body.ProductId);
                return Order.create({
                    CustomerId: req.UserId,
                    ProductId: Number(req.body.ProductId),
                    amount: 1
                })
            }
        })
        .then(order=>{
            res.status(200).json({order})
        })
        .catch(next);
    }
    static emptyCart (req, res, next){
        console.log('aaaa')
        Order.destroy({
            where: {CustomerId : req.UserId}
        })
        .then((a)=>{
            console.log(a)
            res.status(200).json({message: 'Your cart is empty'})
        })
        .catch(err=>{
            console.log(err); 
        })
    }
    static updateProductInCart(req, res, next){
        let id = req.params.id;
        Order.update({amount: req.body.amount},{where: {id : id}, returning: true})
        .then(order =>{
            res.status(200).json({order});
        })
        .catch(next);
    }
    static removeProductFromCart(req, res, next){
        let id = req.params.id;
        Order.destroy({where: {id:id}})
        .then(()=>{
            res.status(200).json({message: 'Product Successfully Deleted'});
        })
        .catch(next)
    }
    static checkout (req, res, next){
        console.log('dwwdedewd')
        let customer = null;
        let totalPrice = 0;
        let orderz = null;
        Customer.findByPk(req.UserId)
        .then((cust)=>{
            if(cust){
                customer = cust;
                return cust;
            }
            else{
                throw new Error('Customer not found');
            }
        })
        .then(cust=>{
            console.log(cust);
            return Order.findAll({
                where: {CustomerId : req.UserId}, 
                include: {model: Product}
            });
        })
        .then(orders=>{
            orderz = orders;
            for(let i=0; i<orders.length; i++){
                totalPrice += (orders[i].amount * orders[i].Product.price);
            }
            console.log(totalPrice)
            return orders;
        })
        .then(orders => {
            console.log(orders);
            if(customer.credit >= totalPrice){
                return 'You have enought credits'
            }
            else{
                throw new Error('You do not have enough credits');
            }
        })
        .then(async (msg)=>{
            console.log(msg)
            const updates = [];
            for(let i=0; i<orderz.length; i++){
                if(orderz[i].Product.stock - orderz[i].amount < 0){
                    throw new Error(`${orderz[i].Product.name}'s stock is not enough`);
                } else{
                    updates.push(Product.update({stock: (orderz[i].Product.stock - orderz[i].amount)}, 
                    {where: {id: orderz[i].ProductId}}))
                }
            }
            updates.push(Customer.update({credit: (customer.credit - totalPrice)}, {where: {id: customer.id}}));
            return Promise.all(updates);
        })
        .then(()=>{
            console.log('product stock has been updated')
            return Order.destroy({where: {CustomerId: req.UserId}})
        })
        .then(()=>{
            console.log('orders have been removed');
            res.status(200).json({message: 'Checkout Success'});
        })
        .catch(err =>{
            console.log(err);
        });
    }
}
module.exports = ProductController;