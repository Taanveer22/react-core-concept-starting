// conditional rendering system 4
const Todo4 = ({ work, isDone }) => {
  // console.log(work, isDone);
  return (
    <li>
      {work} {isDone && " : done"}
    </li>
  );
};

export default Todo4;
