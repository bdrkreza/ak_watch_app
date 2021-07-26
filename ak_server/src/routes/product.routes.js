const express = require("express");
const { userAuth } = require("../validation/auth");
const router = express.Router();

router.get("/", userAuth, async (req, res) => {
    return res.json({ message: "this product route" });
});

module.exports = router;