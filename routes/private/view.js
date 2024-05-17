const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getSessionToken } = require('../../utils/session');
const roles = require('../../constants/roles');

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

const getUser = async function(req) {
  const sessionToken = getSessionToken(req);
  if (!sessionToken) {
    throw new Error("Session token not found");
  }

  const user = await db.select('*')
    .from('se_project.sessions')
    .where('token', sessionToken)
    .innerJoin('se_project.users', 'se_project.sessions.userid', 'se_project.users.id')
    .first();

  user.isStudent = user.roleid === roles.student;
  user.isAdmin = user.roleid === roles.admin;
  user.isSenior = user.roleid === roles.senior;

  return user;  
};

module.exports = function(app) {
  // Admin Dashboard
  app.get('/dashboard', authenticateJWT, async function(req, res) {
    try {
      const user = await getUser(req);
      if (user.isAdmin) {
        return res.render('adminDashboard');
      } else {
        return res.render('userDashboard');
      }
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  // User Management
  app.get('/users', authenticateJWT, async function(req, res) {
    try {
      const users = await User.find({});
      return res.render('users', { users });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  // Subscription Management
  app.get('/subscriptions', authenticateJWT, async function(req, res) {
    try {
      const user = await getUser(req);
      const subscriptions = await Subscription.find({ userid: user.id });
      return res.render('subscriptions', { subscriptions });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });


  // Admin Views
  app.get("/manage/stations", authenticateJWT, async function(req, res) {
    try {
      const stations = await Station.find({});
      return res.render('manageStations', { stations });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  app.get("/manage/stations/create", authenticateJWT, async function(req, res) {
    return res.render('createStation');
  });

  app.get("/manage/stations/edit/:stationId", authenticateJWT, async function(req, res) {
    try {
      const stationId = req.params.stationId;
      const station = await Station.findById(stationId);
      if (!station) {
        return res.status(404).send("Station not found");
      }
      return res.render('editStation', { station });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  });

  // Similar routes for managing routes can be added here
};
