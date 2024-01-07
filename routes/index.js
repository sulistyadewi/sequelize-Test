const router = require("express").Router();
const routeStudent = require("./routeStudent");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/student", routeStudent);

module.exports = router;
