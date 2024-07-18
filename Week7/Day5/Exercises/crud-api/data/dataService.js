const axios = require("axios");

const fetchPosts = async (address) => {
    try {
        const response = await axios.get(address);
        return response.data;
    } catch (error) {
        throw error;
    }
};

module.exports = { fetchPosts };
