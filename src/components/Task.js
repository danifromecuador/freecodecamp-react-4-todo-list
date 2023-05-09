const Task = ({text}) => {
  return (    
    <li>
      <input type='checkbox' />
      <div className="task">{text}</div>
      <input type='button' value="remove"/>
    </li>
  );
};

export default Task;