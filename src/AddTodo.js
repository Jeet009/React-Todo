import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
      title: ''
    }
    handleChnage = (e) => {
      this.setState({
          title: e.target.value
      })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">add_circle</i>
                    <label htmlFor="todo">Add New Todo:</label>
                    <input id="todo" type="text" className="validate" onChange={this.handleChnage} value={this.state.title}/>
                    
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
