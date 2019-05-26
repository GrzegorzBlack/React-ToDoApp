import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        text: 'kupić laptop',
        important: true,
        active: true,
       
      },
      { id: 1, text: "posrzątać pokój", important: false, active: true },
      { id: 2, text: "pomalować ławkę", important: false, active: true },
      { id: 3, text: "schudnąć ", important: true, active: true },
      { id: 4, text: "sprzedać butelki ", important: false, active: true },
      { id: 5, text: "zaprowadzić psa do weta",  important: false, active: true },
      { id: 6, text: "fryzjer!!!",  important: true, active: true },
      { id: 7, text: "pójść na poczte",  important: false, active: true },
      { id: 8, text: "kupić 2 butelki wody",  important: false, active: true},

    ]
  }

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, important) => {
    
    const task = {
      id: this.counter,
      text, // tekst z inputa
      important, //wartość z inputa
      active: true
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))


    return true
  }

  render() {
    return (
      <div className="App">
        <h1>TOD APP</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
