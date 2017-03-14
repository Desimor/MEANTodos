var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    priority: Number,
    category: String,
    task: String,
    date: Number
});

var Todo = mongoose.model('Todo', animalSchema);
module.exports = Todo;