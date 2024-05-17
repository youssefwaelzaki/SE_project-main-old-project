const mongoose = require('mongoose');
const User = require('../../models/user');
const Car = require('../../models/car');
const ShoppingCart = require('../../models/shoppingCart');

module.exports = function(app) {
  // Register HTTP endpoint to render /index page
  app.get('/', function(req, res) {
    console.log("view Main");
    return res.render('Main');
  });
  
  app.get('/login', function(req, res) {
    console.log("view Login");
    return res.render('login');
  });

  app.get('/register', async function(req, res) {
    console.log("view Register");
    const stations = await db.select('*').from('se_project.stations');
    return res.render('register', { stations });
  });

  app.get('/resetPassword', function(req, res) {
    console.log("view resetPassword");
    return res.render('resetPassword');
  });

  app.get('/userDashboard', function(req, res) {
    console.log("view UserDashboard");
    return res.render('userDashboard');
  });

  app.get('/adminDashboard', function(req, res) {
    console.log("view AdminDashboard");
    return res.render('adminDashboard');
  });

  app.get('/addUsers', function(req, res) {
    console.log("view AddUsers");
    return res.render('addUsers');
  });

  app.get('/stock', async function(req, res) {
    console.log("view Stock");
    try {
      const cars = await Car.find();
      return res.render('stock', { cars });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
  });

  app.get('/cart', async function(req, res) {
    console.log("view Cart");
    try {
      const userId = req.query.userId; // Assuming you pass userId as a query parameter
      const cartItems = await ShoppingCart.find({ userId }).populate('carId');
      return res.render('cart', { cartItems });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
  });

  app.get('/userInfo', async function(req, res) {
    console.log("view UserInfo");
    try {
      const userId = req.query.userId; // Assuming you pass userId as a query parameter
      const user = await User.findById(userId);
      return res.render('userInfo', { user });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
  });

  app.get('/proceedToPayment', function(req, res) {
    console.log("view ProceedToPayment");
    return res.render('proceedToPayment');
  });
};
