// conditional rendering system 2
const Todo2 = ({ work, isDone }) => {
  // console.log(work, isDone);
  if (isDone) {
    return <li>finished : {work}</li>;
  }
  return <li> not finished :{work}</li>;
};

export default Todo2;
