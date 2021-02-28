var express = require('express');
var router = express.Router();
const Note = require('../models/Note');
const guard = require('../guards');
/* GET home page. */

router.get('/', guard, function(req, res, next) {
  console.log(req.user._id);
  Note.find({ user_id: req.user._id})
    .then(notes => res.send(notes))
});
router.post('/', guard, function(req, res, next) {
  req.body.user_id = req.user._id
  var note = new Note(req.body)
  note.save()
    .then(data => res.send(data))
    .catch(err => res.status(422).send(err))
});
router.put('/:id', guard, function(req, res, next) {
  Note.findOne({ _id: req.params.id })
    .then(note => {
      if(note.user_id != req.user._id) {
        return res.status(403).send('Forbiden')
      }
      Object.assign(note, req.body);
      note.save()
        .then(data => res.send(data))
        .catch(err => res.status(422).send(err))
    })
});
router.delete('/:id', guard, function(req, res, next) {
  Note.findOne({ _id: req.params.id })
    .then(note => {
      if(note.user_id != req.user._id) {
        return res.status(403).send('Forbiden')
      }
      note.remove()
    })
    res.status(204).send('')
});


module.exports = router;
