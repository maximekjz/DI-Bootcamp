// 🌟 Exercise 4: Todo List Using ES6 Module Syntax

// In todo.js, define an ES6 module that exports a TodoList class.

class TodoList {
    constructor(){
        this.task = [];
    }

    add(new_task){
        this.task.push({task : new_task, statut : 'incomplete'})
        return this.task
    }

    complete(index){
        if(index>=0 && index<this.task.length){
            this.task[index].statut ='complete'
        return this.task[index].statut}

        else{return null}
    }

    list_all(){
            this.task.forEach((task, index)=>{
            console.log(`${index + 1}. ${task.task} is ${task.statut}`);    
    })
        
}
}

const task1 = new TodoList()
task1.add('Eat')
task1.add('Do my homework')
task1.add('Take shower')
task1.complete(1)
task1.list_all()

module.exports = {
    TodoList
}

