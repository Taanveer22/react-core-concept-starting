const Todo = ({ task }) => {
  // console.log(task);
  const taskListStyle = {
    border: "2px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };
  return <li style={taskListStyle}>{task}</li>;
};

export default Todo;
