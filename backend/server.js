const express = require("express");
const cors = require("cors");
require("dotenv").config();

const gameRoutes = require("./routes/gameRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🎯 Numzy Backend is running!"
  });
});

app.use("/api/games", gameRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🎯 Numzy Backend running on port ${PORT}`);
});