import "./App.css";
import { useState } from "react";
import { puppyList } from "./data";

// const dogs = [
//   { id: 1, name: "Logan", breed: "Italian Greyhound", age: 14 },
//   { id: 2, name: "Chase", breed: "Italian Greyhound", age: 12 },
//   { id: 3, name: "Lincoln", breed: "Mixed Rescue", age: 6 },
// ];

function App() {
  const [count, setCount] = useState(0);
  const [puppies, setPuppies] = useState(puppyList);
  console.log("array", puppies);

  return (
    <>
      <h1>Puppy Pals</h1>
      <div className="App">
        {puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
