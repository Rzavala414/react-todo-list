import React from 'react';
import './Task.css';

// Creates a task
export default class Task extends React.Component{
    constructor(props){
        super(props)

        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(){
        this.props.onRemove(this.props.task)
    }

    render(){

        return(
            <div className='task'>
               <p>{this.props.task}</p> 
                <span onClick={this.removeTask}>X</span>
            </div>
        )
        
    }
}