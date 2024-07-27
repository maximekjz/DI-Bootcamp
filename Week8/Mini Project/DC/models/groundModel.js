const { db } = require("../config/db.js");

module.exports = {
  createGround: async (groundInfo) => {
    const { groundname, city, address, sport, image } = groundInfo;
    const url = groundname.toLowerCase().replace(/\s+/g, '-');

    const trx = await db.transaction();

    try {
      const [ground] = await trx("playground").insert(
        { groundname, city, address, sport, image, url },
        ["groundname", "id", "url"]
      );

      await trx.commit();

      return ground;
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  },

  getAllGrounds: async () => {
    try {
      const grounds = await db("playground").select("*");
      return grounds;
    } catch (error) {
      throw error;
    }
  },

  getGroundById: async (id) => {
    try {
      const ground = await db("playground")
        .select("id", "groundname")
        .where("id", id)
        .first();
      return ground;
    } catch (error) {
      throw error;
    }
  },

  getGroundByUrl: async (url) => {
    try {
      const ground = await db("playground")
        .select("*")
        .where("url", url)
        .first();
      return ground;
    } catch (error) {
      throw error;
    }
  }
};
