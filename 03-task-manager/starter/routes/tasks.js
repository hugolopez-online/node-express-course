const express = require("express");
const router = express.Router();

router.route("/")
    .get((req, res) => {
        return res.status(200).send("all items");
    })
    .post((req, res) => {
        return res.status(201).send("post item")
    });

module.exports = router;