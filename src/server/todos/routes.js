const mongoose = require('mongoose');
const Todo = require('server/db/db').Todo;
const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  Todo.find(function(err, results) {
    if (err) {
      console.log(err);
    }
    res.send({ todos: results });
  })
});

router.post('/', function(req, res) {
  const todo = new Todo(req.body);
  todo.save(function(err) {
    if (err) {
      res.send(err);
    }
  })
});

module.exports = router;
