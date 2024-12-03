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
      <h1>🐶 Puppy Pals 🐶</h1>
      <div className="card">
        <div className="puppy-list">
          <h2>Select a puppy to view more:</h2>
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
        </div>
        {featuredPup && (
          <div className="feat">
            <h2>Featured Pup</h2>
            <h3>{featuredPup.name}</h3>
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
