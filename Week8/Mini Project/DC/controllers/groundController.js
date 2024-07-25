const groundModel = require("../models/groundModel.js");

module.exports = {

  getAllGrounds: async (req, res) => {
    try {
      const Grounds = await groundModel.getAllGrounds();
      res.json(Grounds);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },

  getGroundByName: async(req, res) => {
    try{
        const Grounds = await groundModel.getGroundByName(req.params.name);
        res.json(Grounds);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" });   
    }
  },

  putgroundById: async(req, res) => {
    try{
        const Grounds = await groundModel.putgroundById(req.params.id);
        res.json(Grounds);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" });   
    }
  },

  createGround: async (req, res) => {
    try {
      const { sport, city, address, groundName } = req.body;
      const image = req.file ? req.file.buffer : null;

      const newGround = await groundModel.createground({
        groundname: groundName,
        city,
        address,
        sport,
        image,
      });

      res.status(201).json({ message: "Playground added successfully", newGround });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },
};
