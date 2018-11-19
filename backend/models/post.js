const mongoose = require('mongoose');
//define los campos y el tipo que vas a utlizar
const postSchema = mongoose.Schema({
      title:{ type: String, required: true},
      content:{ type: String, required: true},
      songs:{ type: String, required: false},
      date:{ type: String, required: false}

});

module.exports = mongoose.model('Post',postSchema);

