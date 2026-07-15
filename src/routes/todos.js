const express = require("express");

const router = express.Router();

// TODO: implement todo CRUD (list/create/update/delete) for the user prompt.
router.get("/", (_req, res) => {
  res.json([]);
});

module.exports = router;
