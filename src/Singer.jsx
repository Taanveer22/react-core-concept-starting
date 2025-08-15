const Singer = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h4>name : {params.name} </h4>
      <p>age : {params.age} </p>
    </div>
  );
};

export default Singer;
