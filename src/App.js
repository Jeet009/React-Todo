import React, { Component } from 'react';
import Todo from './Todo'
import AddTodo from './AddTodo'
class App extends Component {
  state = {
    todos: [
      {id: 1, title: 'Weak-up', desc: 'I am going to wake up', time: '7 A.M'},
      {id: 2, title: 'Breakfast', desc: 'I am going to eat', time: '8 A.M'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id != id
    });

   this.setState({
     todos
   })
  }

  addTodo = (todo) => {
     todo.id = Math.random();
     let todos = [...this.state.todos, todo];
     this.setState({
       todos
     })
  }

  render(){
  return (
    <div className="todo-app container">
     <h1 className="center">Todo App</h1>
     <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
     <AddTodo addTodo={this.addTodo}/>
    </div>
  );
  }
}

export default App;
