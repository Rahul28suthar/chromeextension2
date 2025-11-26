const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

router.post("/add", async (req, res) => {
  try {
    const data = await Profile.create(req.body);
    res.json({ message: "Profile saved", data });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
