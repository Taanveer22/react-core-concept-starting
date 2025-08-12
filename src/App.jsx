import "./App.css";
function App() {
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
  console.log(props);

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
  console.log(grade, score);
  return (
    <div className="pupil-style">
      <h5>He is a Pupil</h5>
      <p>His grade is {grade}</p>
      <p>His score is {score}</p>
    </div>
  );
}

export default App;
