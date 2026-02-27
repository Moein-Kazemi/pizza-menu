import "./App.css";
import Header from "./Header";
import Main from "./Main";
import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState([]);
  // const [lentgth, setLength] = useState(()=> pizzas.lentgth);
  const length = pizzas.length;

  // pure function
  // no side effect
  // same output for same input

  // side effect
  // alert("hi im side effect");
  // setInterval(() => {
  //   alert("im interval");
  // }, 2000);
  // localStorage.setItem("them" , "dark")

  //1) mount => useEffect => depArray = []
  // 2) re-render => dependenciArray update => useEffect => depArray [isOpen]
  // 3)  onmount => clenup function => useEffect
  useEffect(() => {
    fetch("http://localhost:5000/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div className="App">
      <Header length={length} />
      <Main pizzas={pizzas} />
    </div>
  );
}

export default App;
