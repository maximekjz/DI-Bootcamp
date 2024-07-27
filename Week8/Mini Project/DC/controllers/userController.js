const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");

module.exports = {
  registerUser: async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    const user = { username, password, email, first_name, last_name };

    try {
      const userInfo = await userModel.createUser(user);
      res.status(201).json({
        message: "User registered successfully",
        user: userInfo,
      });
    } catch (error) {
      console.log(error.code);
      if (error.code === '23505') {
        return res
          .status(409)
          .json({ message: "Email or Username already exist, please try again" });
      }
      res.status(500).json({ error: "internal server error" });
    }
  },

  loginUser: async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await userModel.getUserByUsername(username);

      if (!user) {
        return res.status(404).json({ message: "user not found, please check the username"});
      }

      const passwordMatch = await bcrypt.compare(password + "", user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Authentication failed..." });
      }

      res.json({
        message: "Login succesfull",
        user: { id: user.id, username: user.username },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },

  getUserById: async(req, res) => {
    try{
        const users = await userModel.getUserById(req.params.id);
        res.json(users);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" });   
    }
  },

  putUserById: async(req, res) => {
    try{
        const users = await userModel.putUserById(req.params.id);
        res.json(users);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" });   
    }
  }
};
