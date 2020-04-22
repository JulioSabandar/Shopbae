function errorHandler (err, req, res, next) {
    if(err){
        console.log(err.message)
        if(err.message == 'Incorrect Email/Password'){
            res.status(400).json({message : 'Incorrect Email/Password'});
        }
        else if(err.name == 'SequelizeValidationError'){
            if(err.message == 'Validation error: Quantity cannot be less than 0'){
                res.status(408).json({message : 'Quantity cannot be less than 0'});
            }else if(err.message == 'Validation error: Your credits cannot be less than 0'){
                res.status(408).json({message : 'Your credits cannot be less than 0'});
            }
            else{
                res.status(400).json({message : 'Invalid Input'});
            }
        }
        else if(err.name == 'SequelizeUniqueConstraintError'){
            res.status(401).json({message : 'Email is taken'});
        }
        else if(err.message == 'Product Not Found'){
            res.status(404).json({message : 'Product Not Found'});
        }
        else if(err.message == 'Customer not found'){
            res.status(404).json({message : 'Customer not found'});
        }
        else if(err.message == 'You do not have enough credits'){
            res.status(405).json({message : 'You do not have enough credits'});
        }
        else if(err.message == 'Stock is not enough'){
            res.status(406).json({message : 'Stock is not enough'});
        }
        else{
            res.status(500).json({message : 'Internal Server Error'});
        }
    }
}
module.exports = errorHandler;