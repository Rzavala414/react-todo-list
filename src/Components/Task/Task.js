import React from 'react';
import './Task.css';

// Creates a task
export default class Task extends React.Component{

    render(){

        return(
            <div className='task'>
                {this.props.task}
                <span>X</span>
            </div>
        )
        
    }
}