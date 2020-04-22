const {Router} = require('express')
const router = Router();
const customerRouter = require('./customerRouter');
const productRouter = require('./productRouter');
const errorHandler = require('../middleware/errorHandler')
router.use('/', customerRouter);
router.use('/product', productRouter);
router.use(errorHandler);
module.exports = router;