const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const User = require('./models/user');
// const adminController = require('./controllers/adminController');
// const userController = require('./controllers/userController');
const routes = require('./routes/routes')

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// EJS template engine
app.set('view engine', 'ejs');

// Routes
app.use('/',routes)
// app.get('/admin', adminController.getUsers);
// app.get('/user/:id', userController.getUser);
// app.post('/user/:id/post', userController.post);
// app.post('/user/:id/upgrade', userController.upgrade);



// Start the server
sequelize.sync().then(async () => {

  // const defaultUsers = [
  //   { username: 'user1', status: 'free', creditPoints: 100 },
  //   { username: 'user2', status: 'paid', creditPoints: 500 },
  //   // Add more default users with different statuses and credits as needed
  //   { username: 'user3', status: 'free', creditPoints: 100 },
  //   { username: 'user4', status: 'paid', creditPoints: 500 },
  //   { username: 'user5', status: 'free', creditPoints: 100 },
  //   { username: 'user6', status: 'paid', creditPoints: 500 },
  //   { username: 'user7', status: 'free', creditPoints: 100 },
  //   { username: 'user8', status: 'paid', creditPoints: 500 },
  //   { username: 'user9', status: 'free', creditPoints: 100 },
  //   { username: 'user10', status: 'paid', creditPoints: 500 },
  // ];

  // try {
  //   await User.bulkCreate(defaultUsers);
  //   console.log('Default users created successfully.');
  // } catch (error) {
  //   console.error('Error creating default users:', error);
  // }

  app.listen(port, () => {
    console.log(`Let's begin at ${port}`);
  });
});
