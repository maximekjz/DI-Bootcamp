const commentModel = require('../models/commentModel');

const addComment = async (req, res) => {
  try {
    const { userid, groundid } = req.body;
    
    if (!userid || !groundid) {
      return res.status(400).json({ message: 'User id and Ground id are required' });
    }
    
    await commentModel.addComment(userid, groundid);
    
    res.json({ message: 'comment added successfully' });
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Error adding comment', error: error.message });
  }
};

const removeComment = async (req, res) => {
  try {
    const { userid, groundid } = req.body;
    
    if (!userid || !groundid) {
      return res.status(400).json({ message: 'User id and Ground id are required' });
    }
    
    await commentModel.removeComment(userid, groundid);
    
    res.json({ message: 'comment removed successfully' });
  } catch (error) {
    console.error('Error removing comment:', error);
    res.status(500).json({ message: 'Error removing comment', error: error.message });
  }
};

const getComments = async (req, res) => {
  try {
    const { userid } = req.params;

    if (!userid) {
      return res.status(400).json({ message: 'User id is required' });
    }
    const comments = await commentModel.getComments(userid);

    res.json({message: 'comments founded successfully ', comments});
  } catch (error) {
    console.error('Error getting comments:', error);
    res.status(500).json({ message: 'Error getting comments', error: error.message });
  }
};

module.exports = {
  addComment,
  removeComment,
  getComments
};