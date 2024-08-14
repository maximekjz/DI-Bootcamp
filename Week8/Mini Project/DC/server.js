/** 
 *  server
 *    |_ config - connection to database
 *    |_ models - queries to database / files
 *    |_ controllers - function implements code - req, res
 *    |_ routes - route for api
 *      
 *                                             Routes   <-- HTTP request
 *                                                |
 *                               Forward request to appropriate controler
 *                                                |
 *                                                v
 *      DB <--> Models <-- read/write data --> Controlers --> HTTP Response
 */


// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
// GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
// PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required).


const express = require("express");
const userRouter = require("./routes/userRouter.js");
const multer = require("multer");  // uploading file 
const groundRouter = require("./routes/groundRouter.js");
const likeRouter = require('./routes/likeRouter.js');
const app = express();
const cors = require('cors');
const ejs = require("ejs");
const path = require('path');


app.use(cors());
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'public/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index'); 
});

app.get('/script_login.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script_login.js'));
});
// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/api", groundRouter); 
app.use('/grounds', groundRouter);
app.use("/api", likeRouter);

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/dashboard');
    }

    res.clearCookie('connect.sid'); 
    res.redirect('/login');
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});



