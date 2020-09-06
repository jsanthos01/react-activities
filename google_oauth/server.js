const express = require("express");
const dotenv = require("dotenv");

//Load Config
dotenv.config({path: "./config/config.env"});

const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT,  console.log( `[Storybook], http://localhost:${PORT}` ));