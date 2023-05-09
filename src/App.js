import './App.css';
import toDoLogo from './images/download.png'
import Task from './components/Task';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);  
  const add = () => {
    setTasks([{"completed": false, "text": "some text task 1"}, {"completed": false, "text": "some text task 2"}]);
    console.log(tasks);
  };
  return (
    <div className="App">
      <img src={toDoLogo} />
      <div className="mainContainer">
        <h1>My Tasks</h1>
        <input type="text" className="newTask" placeholder="Add a new task" onChange={add}></input>
        <ul className="tasksContainer">
          { tasks.map((task) => <Task text={task.text} />) }
        </ul>
      </div>
     </div>
  );
}

export default App;
