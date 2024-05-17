const mongoose = require('mongoose')

module.exports = function(app) {
  //Register HTTP endpoint to render /index page
  app.get('/', function(req, res) {
    console.log("view Main")
    return res.render('Main');
  });
  app.get('/login', function(req, res) {
    console.log("view Login")
    return res.render('login');
  });
// example of passing variables with a page
  app.get('/register', async function(req, res) {
    console.log("view Register")
    const stations = await db.select('*').from('se_project.stations');
    return res.render('register', { stations });
  });

  app.get('/resetPassword', function(req, res) {
    console.log("view resetPassword")
    return res.render('resetPassword');
  });
};