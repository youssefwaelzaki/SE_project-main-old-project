const express = require('express');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');
const User = require('../../models/user'); // Assuming your user model is in this path
const Car = require('../../models/car'); // Assuming your car model is in this path
const ShoppingCart = require('../../models/shoppingCart'); // Assuming your shopping cart model is in this path

const router = express.Router();

// Register new user
router.post('/register', async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      role: 'user', 
    });

    const savedUser = await newUser.save();

    return res.status(200).json(savedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Could not register user');
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send('Invalid password');
    }

    const sessionToken = v4();

    user.sessionToken = sessionToken;
    await user.save();

    return res.status(200).json({ message: 'Login successful', user, sessionToken });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

// User logout
router.post('/logout', async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    user.sessionToken = null;
    await user.save();

    return res.status(200).send('Logout successful');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

// Reset user password
router.put('/resetPassword', async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).send('Password reset successful');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

// Update user data
router.put('/updateUserData', async (req, res) => {
  try {
    const { id, firstName, lastName, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, email }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Could not update user data');
  }
});

// Get user profile
router.get('/profile', async (req, res) => {
  try {
    const { sessionToken } = req.headers;

    const user = await User.findOne({ sessionToken });
    if (!user) {
      return res.status(404).send('User not found');
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

// Get all cars in stock
router.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    return res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

// Add car to shopping cart
router.post('/cart', async (req, res) => {
  try {
    const { userId, carId } = req.body;

    const cartItem = new ShoppingCart({ userId, carId });
    await cartItem.save();

    return res.status(200).json(cartItem);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

// Remove car from shopping cart
router.delete('/cart', async (req, res) => {
  try {
    const { userId, carId } = req.body;

    await ShoppingCart.findOneAndDelete({ userId, carId });

    return res.status(200).send('Car removed from cart');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

// Get shopping cart items
router.get('/cart', async (req, res) => {
  try {
    const { userId } = req.query;

    const cartItems = await ShoppingCart.find({ userId }).populate('carId');
    return res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

// Proceed to payment
router.post('/payment', async (req, res) => {
  try {
    const { userId, paymentDetails } = req.body;

    // Assume payment processing logic here

    // Clear user's shopping cart after successful payment
    await ShoppingCart.deleteMany({ userId });

    return res.status(200).send('Payment successful');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
