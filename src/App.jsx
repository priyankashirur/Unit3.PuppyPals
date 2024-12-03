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
  const [featPupId, setfeatPupId] = useState(null);
  console.log("array", puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("featured pup", featuredPup);

  return (
    <>
      <h1>Puppy Pals</h1>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setfeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
        {featuredPup && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
