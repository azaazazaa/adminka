const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Приложение запущено на тут: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<p>Это параграф</p>");
});
