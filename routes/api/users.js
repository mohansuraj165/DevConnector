const express = require("express");
const router = express.Router();

// @route GET api/users/test
// @desc tests usres route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users Works!" }));

module.exports = router;
