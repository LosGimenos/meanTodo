const DB_SLUG = process.env.DB_SLUG;
const mongoose = require('mongoose');

mongoose.connect(DB_SLUG);

const Todo = mongoose.model('Todo', {
  task: String,
  isCompleted: Boolean,
  isEditing: Boolean
});

module.exports.Todo = Todo;
