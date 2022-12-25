const Score = require("./score.model");

const getScores = (gameId) => Score.find({ gameId });

const addScore = ({ gameId, userId, score }) => {
  const newScore = new Score({
    gameId,
    userId,
    score,
  });
  return newScore.save();
};

const updateScore = ({ gameId, userId, score }) => {
  return Score.findOneAndUpdate({ gameId, userId }, { score }, { new: true });
};

const deleteScores = ({ gameId, userId }) =>
  Score.findOneAndDelete({ gameId, userId });

module.exports = {
  getScores,
  addScore,
  updateScore,
  deleteScores,
};
