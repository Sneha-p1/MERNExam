const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.post('/task', async (req, res) => {
    try {
        const { title, description, status, priority, createdAt } = req.body;
        const task = new Task({ title, description, status, priority, createdAt });
        await task.save();
        res.status(201).json({ message: 'Task added successfully', task });
        
    }
    catch (error) {
        console.error('task creation error', error);
        res.status(500).json({ error: 'task creation failed' });    
    }
    
});   

router.get('/task/:id', async (req, res) => {
    const id = req.params.id;
    const details = await Task.findOne({ id: id }, { _id: 0 });
    res.json(details);
});

router.get('/task', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks)
    }
    catch (error) {
        console.error('fetching failed', error);
        res.status(500).json({ error: 'failed to fetch tasks' }); 
    }

});

router.put('/task/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log("new1", id);
        const { title, description, status, priority, createdAt } = req.body;
        const updatedTask = await Task.findOneAndUpdate(
            { id }, { title, description, status, priority, createdAt }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });

    }
    catch (error) {
        console.error('task update error', error);
        res.status(500).json({ error: 'task update failed' });
        
    }
});   



router.delete('/task/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        const deleteTask = await Task.findOneAndDelete({ id });
        if (!deleteTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json({ message: 'Task delete successfully' });
    }
    catch (error) {
        console.error('product not found', error);
        res.status(500).json({ error: 'Task not found' });
        
    }
})



