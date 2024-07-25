const { db } = require("../config/db.js");

module.exports = {

    createground: async (groundinfo) => {
        const { groundname, city, address, sport, image } = groundinfo;
    
        const trx = await db.transaction();
    
        try {
          // insert ground data into 'grounds' table
          const [ground] = await trx("playground").insert(
            { groundname, city, address, sport, image},
            ["groundname", "id"]
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
      const Grounds = await db("playground").select("*");
      return Grounds;
    } catch (error) {
      throw error;
    }
  },

  getGroundById: async (id) => {
    try{
        const Ground = await db("playground")
        .select("playground.id", "playground.groundname")
        .where("playground.id", id)
        .first();
        return Ground
    } catch (error) {
        throw error
    }
  },

};
