


const express = require("express");
const router = express.Router();
const {register} = require("../controllers/Auth")
const {login} = require("../controllers/Auth")


router.post("/register" , register)
router.post("/login", login)


module.exports = router

