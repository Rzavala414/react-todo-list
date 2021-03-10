import React from 'react';
import Tasksbox from '../Tasksbox/Tasksbox';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      taskList: ['Take out trash', 'bring in dog', 'pick up apples at store']
    }

    this.getTask = this.getTask.bind(this);
  }

  getTask(task){
    let taskList = this.state.taskList;
    let  updatedTaskList = taskList.push(task);
    this.setState({tasks: updatedTaskList})
  }

  render(){
    return(
      <div>
        <Tasksbox tasks={this.state.taskList} getTask={this.getTask}/>
      </div>
    )
  }
}

export default App;
