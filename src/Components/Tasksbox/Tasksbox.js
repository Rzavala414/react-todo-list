import React from 'react';
import TaskContainer from '../TaskContainer/TaskContainer';
import './Tasksbox.css';

export default class Tasksbox extends React.Component{

    render(){
        return(
            <div className="container">
                <input type='text' placeholder="Add Task" ></input>
                <TaskContainer/>
            </div>
        )
    }
}