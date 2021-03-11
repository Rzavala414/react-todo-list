import React from 'react';
import Tasksbox from '../Tasksbox/Tasksbox';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      taskList: ['test']
    }

    this.getTask = this.getTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  // Gets the task given in the input add to taskList state
  getTask(task){
    //Grabs old list
    let taskList = this.state.taskList;
    //adds new task to old list 
    let  updatedTaskList = taskList.push(task);
    // sets new state with updated task list
    this.setState({tasks: updatedTaskList})
  }

  // Removes the task selected from the taskList state
  removeTask(task){
    //Grabs old list
    let currentTaskList = this.state.taskList;
    //Filters through old list and creates new array without finished task
    let updatedTaskList = currentTaskList.filter(tasks => tasks !== task)
    // sets new state with updated task list
    this.setState({taskList: updatedTaskList})
  }

  render(){
    return(
      <div>
        <Tasksbox tasks={this.state.taskList} 
                  getTask={this.getTask} 
                  onRemove={this.removeTask}/>
      </div>
    )
  }
}

export default App;
