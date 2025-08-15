import "./App.css";
import Actor from "./Actor";
import BookStore from "./BookStore";
import Singer from "./Singer";
import Todo from "./Todo";
import Todo1 from "./Todo1";
import Todo2 from "./Todo2";
import Todo3 from "./Todo3";
import Todo4 from "./Todo4";
import Todo5 from "./Todo5";
import Todo6 from "./Todo6";
function App() {
  const actors = ["shakib", "shoriful", "manna", "rubel"];
  const singers = [
    { id: 1, name: "hridoy", age: 40 },
    { id: 2, name: "rumi", age: 45 },
    { id: 3, name: "habib", age: 48 },
    { id: 4, name: "balam", age: 50 },
  ];

  const books = [
    { id: 1, name: "physics", price: 200 },
    { id: 1, name: "chemistry", price: 260 },
    { id: 1, name: "math", price: 230 },
    { id: 1, name: "biology", price: 123 },
  ];
  return (
    <>
      <h1>React core concept starting....</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Device name="laptop" price="50"></Device>
      <Device name="mobile" price="20"></Device>
      <Device name="desktop" price="90"></Device>
      <Pupil></Pupil>
      <Pupil grade="A" score="88"></Pupil>
      <Pupil grade="B" score="77"></Pupil>
      <Todo task="learn react"></Todo>
      <Todo task="learn core concept"></Todo>
      <Todo task="learn jsx sytax"></Todo>
      <Todo1 work="rendering system 1" isDone={true}></Todo1>
      <Todo2 work="rendering system 2" isDone={true}></Todo2>
      <Todo3 work="rendering system 3" isDone={false}></Todo3>
      <Todo4 work="rendering system 4" isDone={true}></Todo4>
      <Todo5 work="rendering system 5" isDone={false}></Todo5>
      <Todo6 work="rendering system 6" isDone={true}></Todo6>

      <Actor name="Bappa Raz"></Actor>
      {actors.map((element) => (
        <Actor name={element}></Actor>
      ))}

      {singers.map((element) => (
        <Singer params={element}></Singer>
      ))}

      <BookStore list={books}></BookStore>
    </>
  );
}

// Person function
function Person() {
  const address = "mirpur";
  const money = 3600;
  return (
    <div>
      <h4>
        I am a person and I live in {address} and my home rent is {money}
      </h4>
    </div>
  );
}

// Student function
function Student() {
  const info = {
    nickName: "shakib",
    currentAge: 25,
  };

  return (
    <div className="student-style">
      <h5>He is a student</h5>
      <p>His name is {info.nickName}</p>
      <p>His age is {info.currentAge}</p>
    </div>
  );
}

// Developer function
function Developer() {
  const developerStyle = {
    margin: "10px",
    padding: "10px",
    border: "3px solid green",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Web Developer</h5>
      <p>Works in Front End Web Development </p>
    </div>
  );
}

// Device function
function Device(props) {
  // console.log(props);

  return (
    <h5
      style={{
        border: "2px solid blue",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      This is a {props.name} and Price {props.price}
    </h5>
  );
}

// Pupil Function
function Pupil({ grade = "F", score = "0" }) {
  // console.log(grade, score);
  return (
    <div className="pupil-style">
      <h5>He is a Pupil</h5>
      <p>His grade is {grade}</p>
      <p>His score is {score}</p>
    </div>
  );
}

export default App;
