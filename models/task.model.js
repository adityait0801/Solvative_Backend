const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    datetime: { type: Date, default: Date.now },
    points: { type: Number, required: true },
    given_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    given_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const TaskModel = mongoose.model('task', taskSchema);

module.exports = { TaskModel }