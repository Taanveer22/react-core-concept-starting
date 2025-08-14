// conditional rendering system 1
const Todo1 = ({ work, isDone }) => {
  // console.log(work, isDone);

  if (isDone === true) {
    return <li>finished : {work}</li>;
  } else {
    return <li>not finished : {work}</li>;
  }
};

export default Todo1;
