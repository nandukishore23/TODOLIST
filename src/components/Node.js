const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect('mongodb://localhost:27017/taskDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Task schema
const taskSchema = new mongoose.Schema({
  taskName: String,
  startTime: Date,
  endTime: Date
});

const Task = mongoose.model('Task', taskSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a new task
app.post('/api/tasks', (req, res) => {
  const { taskName, startTime, endTime } = req.body;

  const newTask = new Task({
    taskName,
    startTime,
    endTime
  });

  newTask.save((err) => {
    if (err) {
      return res.status(500).json({ error: 'Error saving task to the database.' });
    }

    return res.status(201).json({ message: 'Task saved successfully.' });
  });
});

// Get all tasks
app.get('/api/tasks', (req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching tasks from the database.' });
    }

    return res.status(200).json(tasks);
  });
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});