// /games
const gamesRoute = require("express").Router();
const { addGame, getAllGames, deleteGames } = require("../controllers/games");

gamesRoute.get("/games", getAllGames);

gamesRoute.delete("/games/:id", deleteGames);

gamesRoute.post("/games", addGame);

module.exports = gamesRoute;
