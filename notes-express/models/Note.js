const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: String,
  user_id: {
    type: String,
    required: true
  }
})
const Note = mongoose.model('Note', noteSchema);
module.exports = Note
