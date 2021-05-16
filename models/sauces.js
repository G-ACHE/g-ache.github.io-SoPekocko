const mongoose = require("mongoose");

// declaration du schema de chaque sauce

const sauceSchema = mongoose.Schema({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    heat: { type: Number, required: true },
    likes : { type: Number, required: false },
    dislikes : { type: Number, required: false },
    imageUrl: { type: String, required: true },
    mainPepper: { type: String, required: true },
    usersLiked: { type: Array, required: true },
    usersDisliked: { type: Array, required: true },
    userId: { type: String, required: true },
    
  });

  // export du schema
  
  module.exports = mongoose.model('Sauces', sauceSchema);