// /games
const gamesRoute = require("express").Router();

const getAllGames = async (req, res) => {};

gamesRoute.get("/games", getAllGames);

module.exports = gamesRoute;
