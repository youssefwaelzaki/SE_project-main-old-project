const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// Import your models
const customers = require('./models/customers');
const products = require('./models/products');
const admins = require('./models/admins');
const orders = require('./models/orders');
const payments = require('./models/payments');
const shipments = require('./models/shipments');
const vehicles = require('./models/vehicles');
const vehicleinvs = require('./models/vehicleinvs');

// Use body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb+srv://youssefzaki38:123@porsche.3rytxba.mongodb.net/', { dbName: 'PorscheWeb' })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define routes
app.get('/register', (req, res) => {
  res.render("register");
});

app.get('/resetPassword', (req, res) => {
    res.render("resetPassword");
  });

app.get('/login', (req, res) => {
    res.render("login");
  });

  app.get('/', (req, res) => {
    res.render("main");
  });
  
app.get('/products', (req, res)=>{
    products.find().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/admins', (req, res) => {
    admins.find()
        .then((result) => {
            if (result.length === 0) {
                return res.status(404).json({ message: 'No admins found' });
            }
            return res.json(result);
        })
        .catch((err) => {
            console.error('Error retrieving admins:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

app.get('/customers', (req, res) => {
    customers.find()
        .then((result) => {
            if (result.length === 0) {
                return res.status(404).json({ message: 'No customers found' });
            }
            return res.json(result);
        })
        .catch((err) => {
            console.error('Error retrieving customers:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

app.get('/orders', (req, res) => {
    orders.find()
        .then((result) => {
            if (result.length === 0) {
                return res.status(404).json({ message: 'No orders found' });
            }
            return res.json(result);
        })
        .catch((err) => {
            console.error('Error retrieving orders:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

app.get('/payments', (req, res) => {
    payments.find()
        .then((result) => {
            if (result.length === 0) {
                return res.status(404).json({ message: 'No payments found' });
            }
            return res.json(result);
        })
        .catch((err) => {
            console.error('Error retrieving payments:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

app.get('/shipments', (req, res) => {
    shipments.find()
        .then((result) => {
            if (result.length === 0) {
                return res.status(404).json({ message: 'No shipments found' });
            }
            return res.json(result);
        })
        .catch((err) => {
            console.error('Error retrieving shipments:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

app.get('/vehicles', (req, res) => {
    vehicles.find()
        .then((result) => {
            if (result.length === 0) {
                return res.status(404).json({ message: 'No vehicles found' });
            }
            return res.json(result);
        })
        .catch((err) => {
            console.error('Error retrieving vehicles:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

app.get('/vehicleinvs', (req, res) => {
    vehicleinvs.find()
        .then((result) => {
            if (result.length === 0) {
                return res.status(404).json({ message: 'No vehicleinvs found' });
            }
            return res.json(result);
        })
        .catch((err) => {
            console.error('Error retrieving vehicleinvs:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

//views(app);

const port = 3000
app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})