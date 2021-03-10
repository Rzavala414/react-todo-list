import React from 'react';
import Task from '../Task/Task';
import './TaskContainer.css'

// Displays each individual task
export default class TaskContainer extends React.Component{

    render(){
        return(
            <div className="task-container">
               {
                 this.props.tasks && this.props.tasks.map((task, id) => {
                      return <Task key={id} task={task}/>
                  })
                }
            </div>
        )
    }
}