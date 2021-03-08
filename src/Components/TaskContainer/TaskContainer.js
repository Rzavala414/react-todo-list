import React from 'react';
import Task from '../Task/Task';
import './TaskContainer.css'

export default class TaskContainer extends React.Component{

    render(){
        return(
            <div className="task-container">
                <Task/>
            </div>
        )
    }
}