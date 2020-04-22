const { Order } = require('../models');
function authorization (req, res, next){
    console.log(req.params.id)


    Order.findOne({where: {id: req.params.id}})
    .then( order => {
        if(order){
            console.log(order)
            if(order.CustomerId == req.UserId){
                next();
            }else{
                res.status(400).json({message: 'Access Forbidden'})
            }
        }
        else{
            res.status(404).json({message: 'Order not found'})
        }
    })
    .catch( err => {
        res.status(500).json({message: err.message});
    });
}
module.exports = authorization;