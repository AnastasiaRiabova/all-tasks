import React, { Component } from 'react';
import Counter from './Counter/Counter.js';
import TaskList from './TaskList/tasks.js';
import tasks from './TaskList/tasks.json';
import Form from './Form/FormList.js';

class App extends Component {
  state = {
    tasks: tasks,
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  removeTasks = id => {
    this.setState(prevState => {
      return { tasks: prevState.tasks.filter(task => task.id !== id) };
    });
  };
  render() {
    return (
      <>
        <Form submitForm={this.formSubmitHandler} />
        <TaskList alltasks={this.state.tasks} remove={this.removeTasks} />
        <Counter intialValue={5} />
      </>
    );
  }
}

export default App;
