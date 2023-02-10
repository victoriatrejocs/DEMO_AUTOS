const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 6000 
const colors = require ("colors")
const connectDB = require ("./config/db")
connectDB()

app.listen (port, () => 
console.log(`Server started on port ${port}`))