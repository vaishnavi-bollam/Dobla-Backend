console.log("top signupform")

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router()

const {registerSignup,loginSignup,getUsers} = require("../controllers/signupFormControllers")


router.post("/register",registerSignup)

router.post("/login",loginSignup)

router.get("/",getUsers)

module.exports = router

console.log("bottom signupform")
