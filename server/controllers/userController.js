const { Customer } = require('../models');
const checkPassword = require('../helpers/checkPassword');
const hashPassword = require('../helpers/hashPassword');
const jwt = require('jsonwebtoken');
class UserController {
    static login(req, res, next){
        console.log('aaaaa')
        let input = req.body;
        console.log(input)
        Customer.findOne({where : {email : input.email}})
		.then( customer => {
            console.log('fbrubfebfwe')
            console.log(customer)
			if(customer){
				if(checkPassword(input.password, customer.password)){
					const access_token = jwt.sign({
                        userId : customer.id,
                        email : customer.email,
                        username : customer.username
					}, process.env.JWT_SECRETKEY);
					res.status(200).json({access_token});
				}else{
                    throw new Error('Incorrect Email/Password');
				}
			}else{
				throw new Error('Incorrect Email/Password');
			}
		})
        .catch(next);
    }
    static register(req, res, next){
        console.log('masukkk')
        Customer.create({
            email : req.body.email,
            username: req.body.username,
            password : hashPassword(req.body.password)
        })
        .then( user => {
            res.status(201).json({user});
        })
        .catch(next);
    }
    static topUp(req, res, next){

        Customer.findByPk(req.UserId)
        .then(customer => {
            return Customer.update({
                credit: (customer.credit + Number(req.body.topUp))
            }, {where: {id: req.UserId}})
        })
        .then(()=>{
            res.status(200).json({message: 'You have successfuly topped up your credits'});
        })
        .catch(next);
    }

}
module.exports = UserController;
