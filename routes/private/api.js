
const { v4 } = require("uuid");
const mongoose = require('mongoose')
const roles = require("../../constants/roles");
const {getSessionToken}=require('../../utils/session')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const getUser = async function (req) {
  const sessionToken = getSessionToken(req);
  if (!sessionToken) {
    return res.status(301).redirect("/");
  }
  console.log("hi",sessionToken);
  const Tuser = await db
    .select("*")
    .from("se_project.sessions")
    .where("token", sessionToken)
    .innerJoin(
      "se_project.users",
      "se_project.sessions.userid",
      "se_project.users.id"
    )
    
   
   console.log("Tuser =>",Tuser );
   const user=Tuser[0];

  console.log("user =>", user.roleid);
  user.isNormal = user.roleid === roles.user;
  user.isAdmin = user.roleid === roles.admin;
  console.log("user =>", user)
  return user;
};

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Assuming you have a User model for managing users
const User = require('./models/User');

// Middleware for JWT authentication
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token == null) {
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

// Routes for private API endpoints
module.exports = function (app) {
  
  // Add a new product
  app.post("/api/v1/products", authenticateJWT, async function (req, res) {
    // Add your logic to create a new product
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
  app.put("/api/v1/products/:productId", authenticateJWT, async function (req, res) {
    // Update existing product
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
  app.delete("/api/v1/products/:productId", authenticateJWT, async function (req, res) {
    // Delete existing product
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


};
