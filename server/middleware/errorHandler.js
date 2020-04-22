function errorHandler (err, req, res, next) {
    if(err){
        if(err.message == 'Incorrect Email/Password'){
            res.status(400).json({message : 'Incorrect Email/Password'});
        }
        else if(err.name == 'SequelizeValidationError'){
            res.status(400).json({message : 'Invalid Input'});
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
            res.status(400).json({message : 'You do not have enough credits'});
        }
        else{
            res.status(500).json({message : 'Internal Server Error'});
        }
    }
}
module.exports = errorHandler;