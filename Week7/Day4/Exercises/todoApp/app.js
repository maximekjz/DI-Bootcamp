const {todo, TodoList} = require('./todo')
console.log(todo)

const task2 = new TodoList()
task2.add('play outside')
task2.add('buy a book')
task2.add('read')
task2.complete(0)
task2.complete(1)
task2.list_all()