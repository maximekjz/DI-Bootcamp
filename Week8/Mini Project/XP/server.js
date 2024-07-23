const express = require("express")

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

var fs = require('fs').promises;
const path = require('path');


fs.appendFile('tas.json','[]' ,function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

const tasksFilePath = path.join(__dirname, 'tasks.json');

const read_tasks = async() => {
    try {
        const data = await fs.readFile(tasksFilePath, 'utf-8');
        return JSON.parse(data);
      } catch (error) {
        throw new Error('Error reading tasks file');
      }
}

const write_tasks = async(tasks) => {
    try{
        await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2))
    } catch(error){
        throw new Error('Error writing tasks file');
    }
}

const validate_task = (task) => {
    if (!task.title || typeof task.title !== 'string') {
      return 'Invalid task title';
    }
    if (!task.description || typeof task.description !== 'string') {
      return 'Invalid task description';
    }
    return null;
  };


app.get('/', async (req, res) => {
    try {
        const tasks = await read_tasks()
        res.json(tasks);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});


app.get('/:id', async (req, res) => {
    try {
        const tasks = await read_tasks()
        const { id } = req.params
        const task = tasks.find(task => task.id === id)
        res.json(task);
    } catch (error) {
        res.status(404).send("Task not found");
    }
});


app.post('/', async (req, res) => {
    const validationError = validate_task
(req.body);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }
    try{
        const tasks = await read_tasks()
        const {title, description} = req.body;
        const new_task = {
            id: (tasks.length ? Math.max(...tasks.map(t => parseInt(t.id))) + 1 : 1).toString(),
            title : title,
            description : description
        }
        tasks.push(new_task)
        await write_tasks(tasks);
        res.status(201).json(newTask);
    } catch(error) {
        console.log(error);
    }
})

app.put('/:id', async (req, res) => {
    const validationError = validate_task
(req.body);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }
    
    try{
        const tasks = await read_tasks();
        const {id} = req.params
        const {title, description} = req.body
        const index = tasks.findIndex((item) => item.id === id)
        if(index===-1){
            return res.status(404).json({message:'not found'})
        }
        tasks[index] = {
            ...tasks[index], 
            title, 
            description
        }
        await write_tasks(tasks);
        res.json(tasks[Index]);
        
    } catch(error) {
        console.log(error);
    }
})

app.delete('/:id', async(req, res) => {
    try{
        const tasks = await read_tasks();
        const {id} = req.params
        const index = tasks.findIndex((item) => item.id === id)
        if(index===-1){
            return res.status(404).json({message:'not found'})
        }
        tasks.splice(index, 1)
        await write_tasks(tasks)
        tasks = await read_tasks();
        res.json({tasks, msg: 'deleted'})          
    } catch(error) {
        console.log(error);
    }
})