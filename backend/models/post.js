const mongoose = require('mongoose');
//define los campos y el tipo que vas a utlizar
const postSchema = mongoose.Schema({
      title: { type: String, required: true},
      content: { type: String, required: false},
      songs: { type: String, required: false},
      date: { type: String, required: true},
      imagePath: { type: String, required: true }

});

module.exports = mongoose.model('Post',postSchema);

