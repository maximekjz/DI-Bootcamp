const likeModel = require('../models/likeModel');

const addLike = async (req, res) => {
  try {
    const { userid, groundid } = req.body;
    
    if (!userid || !groundid) {
      return res.status(400).json({ message: 'User id and Ground id are required' });
    }
    
    await likeModel.addLike(userid, groundid);
    
    res.json({ message: 'Like added successfully' });
  } catch (error) {
    console.error('Error adding like:', error);
    res.status(500).json({ message: 'Error adding like', error: error.message });
  }
};

const removeLike = async (req, res) => {
  try {
    const { userid, groundid } = req.body;
    
    if (!userid || !groundid) {
      return res.status(400).json({ message: 'User id and Ground id are required' });
    }
    
    await likeModel.removeLike(userid, groundid);
    
    res.json({ message: 'Like removed successfully' });
  } catch (error) {
    console.error('Error removing like:', error);
    res.status(500).json({ message: 'Error removing like', error: error.message });
  }
};

const getLikes = async (req, res) => {
  try {
    const { userid } = req.params;

    if (!userid) {
      return res.status(400).json({ message: 'User id is required' });
    }
    const likes = await likeModel.getLikes(userid);

    res.json({message: 'Likes founded successfully ', likes});
  } catch (error) {
    console.error('Error getting likes:', error);
    res.status(500).json({ message: 'Error getting likes', error: error.message });
  }
};

module.exports = {
  addLike,
  removeLike,
  getLikes
};
