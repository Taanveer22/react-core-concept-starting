// conditional rendering system 6
// it removes double return statement
const Todo6 = ({ work, isDone }) => {
  // console.log(work, isDone);

  let listItem;
  if (isDone) {
    listItem = <li>finished : {work}</li>;
  } else {
    listItem = <li>not finished : {work}</li>;
  }
  return listItem;
};

export default Todo6;
