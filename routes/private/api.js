const { v4 } = require("uuid");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const roles = require("../../constants/roles");
const User = require('./models/User');
const Product = require('./models/Product');

// Utility function to extract session token
const getSessionToken = (req) => {
  const token = req.headers.authorization?.split(' ')[1];
  return token || null;
};

// Middleware for JWT authentication
const authenticateJWT = (req, res, next) => {
  const token = getSessionToken(req);
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

// Function to get user from session token
const getUser = async (req) => {
  const sessionToken = getSessionToken(req);
  if (!sessionToken) {
    return null;
  }
  const user = await User.findOne({ sessionToken });
  if (!user) {
    return null;
  }
  user.isNormal = user.role === roles.user;
  user.isAdmin = user.role === roles.admin;
  return user;
};

// Routes for private API endpoints
module.exports = function (app) {
  
  // Add a new user
  app.post("/api/v1/users", authenticateJWT, async (req, res) => {
    const currentUser = await getUser(req);
    if (!currentUser || !currentUser.isAdmin) {
      return res.status(403).send("Access denied");
    }
    
    try {
      const { firstName, lastName, email, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ firstName, lastName, email, password: hashedPassword, role });
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  // Delete user
  app.delete("/api/v1/users/:userId", authenticateJWT, async (req, res) => {
    const currentUser = await getUser(req);
    if (!currentUser || !currentUser.isAdmin) {
      return res.status(403).send("Access denied");
    }

    try {
      const userId = req.params.userId;
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).send("User not found");
      }
      return res.status(200).send("User deleted successfully");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  // Add a new product
  app.post("/api/v1/products", authenticateJWT, async (req, res) => {
    const currentUser = await getUser(req);
    if (!currentUser || !currentUser.isAdmin) {
      return res.status(403).send("Access denied");
    }

    try {
      const { name, price, description } = req.body;
      const newProduct = await Product.create({ name, price, description });
      return res.status(201).json(newProduct);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  // Edit product
  app.put("/api/v1/products/:productId", authenticateJWT, async (req, res) => {
    const currentUser = await getUser(req);
    if (!currentUser || !currentUser.isAdmin) {
      return res.status(403).send("Access denied");
    }

    try {
      const productId = req.params.productId;
      const { name, price, description } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(productId, { name, price, description }, { new: true });
      if (!updatedProduct) {
        return res.status(404).send("Product not found");
      }
      return res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  // Delete product
  app.delete("/api/v1/products/:productId", authenticateJWT, async (req, res) => {
    const currentUser = await getUser(req);
    if (!currentUser || !currentUser.isAdmin) {
      return res.status(403).send("Access denied");
    }

    try {
      const productId = req.params.productId;
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).send("Product not found");
      }
      return res.status(200).send("Product deleted successfully");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  // Fetch all products
  app.get("/api/v1/products", authenticateJWT, async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(200).json(products);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  // Fetch a single product by ID
  app.get("/api/v1/products/:productId", authenticateJWT, async (req, res) => {
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).send("Product not found");
      }
      return res.status(200).json(product);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

};
