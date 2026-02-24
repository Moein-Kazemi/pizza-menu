import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  // pure function
  // no side effect
  // same output for same input

  // side effect
  // alert("hi im side effect");
  // setInterval(() => {
  //   alert("im interval");
  // }, 2000);
  // localStorage.setItem("them" , "dark")

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
