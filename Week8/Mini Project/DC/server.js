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

app.use(cors());

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/api", groundRouter); 

app.use("/api", likeRouter);

app.use(express.static('public'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});



