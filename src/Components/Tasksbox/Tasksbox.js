import React from 'react';
import TaskContainer from '../TaskContainer/TaskContainer';
import './Tasksbox.css';

// Displays the input for users and container of tasks
export default class Tasksbox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task: ''
        }

        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onClick(){
        this.props.getTask(this.state.task)
    }

    onChange(event){
        let task = event.target.value;
        this.setState({task})
    }

    render(){
        return(
            <div className="container">
                <input type='text' placeholder='Enter Task' onChange={this.onChange} ></input>
                <button onClick={this.onClick}>Add Task</button>
                
                <TaskContainer tasks={this.props.tasks} 
                               onRemove={this.props.onRemove}/>
            </div>
        )
    }
}