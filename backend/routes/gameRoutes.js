const express = require("express");

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "🎯 Numzy game API is working!"
  });
});

module.exports = router;

