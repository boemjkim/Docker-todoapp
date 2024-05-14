const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let tasks = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.redirect('/');
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    tasks.splice(id, 1);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
