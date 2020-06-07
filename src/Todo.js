import React from 'react'

const Todo = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
            <li key={todo.id}>
                <div className="deep-orange collapsible-header">
                    <i className="material-icons">assignment</i>
                    {todo.title}
                    <span className="badge"><i className="material-icons lime-text text-lighten-5" onClick={() => {deleteTodo(todo.id)}}>delete</i></span>
                </div>
                <div className="collapsible-body">
                     <span>{todo.desc}</span>
                </div>
            </li>              
            )
        })
        ) : (
        <p className="center">You Have No Todo</p>
        )
   
    return (
        <ul className="collapsible">
            
                {todoList}
            
        </ul>
    
    )
}


export default Todo
