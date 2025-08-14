// conditional rendering system 5
const Todo5 = ({ work, isDone }) => {
  // console.log(work, isDone);
  return (
    <li>
      {work} {isDone || " : not done"}
    </li>
  );
};

export default Todo5;
