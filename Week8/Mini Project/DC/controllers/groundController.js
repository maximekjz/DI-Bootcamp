const groundModel = require("../models/groundModel.js");

module.exports = {
  getAllGrounds: async (req, res) => {
    try {
      const grounds = await groundModel.getAllGrounds();
      res.json(grounds);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getGroundByName: async (req, res) => {
    try {
      const grounds = await groundModel.getGroundByName(req.query.name); // Utilisez req.query.name si c'est un paramètre de requête
      res.json(grounds);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  putgroundById: async (req, res) => {
    try {
      const updatedGround = await groundModel.putgroundById(req.params.id, req.body); // Passez les données de mise à jour
      res.json(updatedGround);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createGround: async (req, res) => {
    try {
      const { sport, city, address, groundName, image } = req.body;
      const groundPageUrl = groundName.toLowerCase().replace(/\s+/g, '-');

      const newGround = await groundModel.createGround({
        groundname: groundName,
        city,
        address,
        sport,
        image,
        url: groundPageUrl,
      });

      res.status(201).json({ message: "Playground added successfully", newGround, groundPageUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getGroundByUrl: async (req, res) => {
    console.log("Requested URL:", req.params.url);
    try {
      const ground = await groundModel.getGroundByUrl(req.params.url);
      if (ground) {
        res.render('ground-details', { ground });
      } else {
        res.status(404).send('Ground not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  },
};