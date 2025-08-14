// conditional rendering system 3
const Todo3 = ({ work, isDone }) => {
  // console.log(work, isDone);
  return (
    <li>
      {isDone ? "finished" : "not finished"} : {work}
    </li>
  );
};

export default Todo3;
