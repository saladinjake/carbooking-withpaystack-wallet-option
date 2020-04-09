const httpStatus = require('http-status');
const { omit } = require('lodash');
const UserModel = require('../models/User.model');
const Transaction = require('../models/transaction.model');
const paymentService = require('../services/paymentService');
const withdrawalService = require('../services/withdrawalService');
const transferService = require('../services/transferService');
const { handler: errorHandler } = require('../middlewares/error');


/**
 * Get customer balance
 * @public
 */
exports.getBalance = (request, response) =>{

  UserModel.find({email: request.params.id})
      .then(data => {
        const redFlag = data;
        if (redFlag.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The id of the given red-flag was not found',
          });
        }
        const accountBalance = data[0].balance
        return response.status(200).json({
          status: 200,
          data: [
            {
              accountBalance,
              message: 'Get a specific red-flag was successful',
            },
          ],
        });
      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: "some error occured",
        }),
      );
} 

/**
 * Get customer transactions
 * @public
 */
exports.getTransactions = async (req, res, next) => {
  try {
    req.query.accountNumber = req.user.accountNumber;
    const transactions = await Transaction.list(req.query);
    const transformedTransactions = transactions.map(transaction => transaction.transform());
    console.log(transformedTransactions)
    res.json(transformedTransactions);
  } catch (error) {
    next(error);
  }
};

/**
 * eWallet Deposit
 * @public
 */
exports.deposit = async (req, res, next) => {
  try {
    const paymentResponse = await paymentService.debitCard(req.customer.accountNumber, req.body.card, req.body.amount);        
    res.json(paymentResponse);    
    
  } catch (error) {
    next(error);
  }
};

/**
 * eWallet Transfer
 * @public
 */
exports.transfer = async (req, res, next) => {
  try {    
    const transferResponse = await transferService.transfer(req.customer.accountNumber, req.body.amount, req.body.destinationAccountNumber);    
    res.json(transferResponse);    
    
  } catch (error) {
    next(error);
  }
};

/**
 * eWallet Withdrawal
 * @public
 */
exports.withdrawal = async (req, res, next) => {
  try {
    const withdrawalResponse = await withdrawalService.withdrawal(req.customer.accountNumber, req.body.card, req.body.amount);        
    res.json(withdrawalResponse);    
    
  } catch (error) {
    next(error);
  }
};