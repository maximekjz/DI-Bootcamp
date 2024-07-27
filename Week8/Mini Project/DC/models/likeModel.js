const { db } = require("../config/db.js");

module.exports = {
    addLike: async (userid, groundid) => {
        try {
            const existingLike = await db('likes')
                .where({ userid, groundid })
                .first(); 

            if (existingLike) {
                return { message: 'Like already exists' };
            }

            await db('likes').insert({ userid, groundid });
            return { message: 'Like added successfully' };
        } catch (error) {
            throw error;
        }
    },

    removeLike: async (userid, groundid) => {
        try {
            await db('likes').where({ userid, groundid }).delete();
        } catch (error) {
            throw error;
        }
    },

    getLikes: async (userid) => {
        try {
            const likes = await db('likes')
            .select('groundid')
            .where({ userid });
        return likes
        } catch (error) {
            throw error;
        }
    }
};