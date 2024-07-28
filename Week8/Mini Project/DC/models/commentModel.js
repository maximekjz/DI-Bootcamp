const { db } = require("../config/db.js");

module.exports = {
    addComment: async (userid, groundid) => {
        try {
            const existingComment = await db('comments')
                .where({ userid, groundid })

            if (existingComment) {
                return { message: 'Comment already exists' };
            }

            await db('comments').insert({ userid, groundid });
            return { message: 'Comment added successfully' };
        } catch (error) {
            throw error;
        }
    },

    removeComment: async (userid, groundid) => {
        try {
            await db('comments').where({ userid, groundid }).delete();
        } catch (error) {
            throw error;
        }
    },

    getComments: async (userid) => {
        try {
            const Comments = await db('comments')
            .select('groundid')
            .where({ userid });
        return Comments
        } catch (error) {
            throw error;
        }
    }
};