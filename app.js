// variables de stockage module npm
const express = require('express');

const path = require('path');

const mongoose = require('mongoose');

const cors = require("cors");

const saucesRoutes = require("./routes/sauces");

const userRoutes = require("./routes/user");

const URL = "mongodb+srv://G-ACHE:MeJuhlGpsJkYF4P8@cluster0.s52j4.mongodb.net/SoPekocko?retryWrites=true&w=majority";

// connection a la base de donnee

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((e) => console.log(e));

// appel d express dans l'application

const app = express();

app.use(express.json());

app.use(cors());  

app.use("/images", express.static(path.join(__dirname, '/images')));

app.use("/api/sauces", saucesRoutes);

app.use("/api/auth", userRoutes);

module.exports = app;