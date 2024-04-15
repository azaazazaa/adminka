// /games
const gamesRoute = require("express").Router();

const getAllGames = async (req, res) => {};
const deleteGames = async (req, res) => {
  console.log("Удалено!");
};
const addGame = async (req, res) => {
  console.log("Удалено!");
};

gamesRoute.get("/games", getAllGames);

gamesRoute.delete("/games/:id", deleteGames);

gamesRoute.post("/games", addGame);

module.exports = gamesRoute;
