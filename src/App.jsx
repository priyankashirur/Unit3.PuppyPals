import { useState } from "react";
import "./App.css";

const dogs = [
  { id: 1, name: "Logan", breed: "Italian Greyhound", age: 14 },
  { id: 2, name: "Chase", breed: "Italian Greyhound", age: 12 },
  { id: 3, name: "Lincoln", breed: "Mixed Rescue", age: 6 },
];

function App() {
  const [count, setCount] = useState(0);
  const [bestDog, setbestDog] = useState(null);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {bestDog && <h3>{bestDog} is the best dog</h3>}

      {dogs.map((dog) => {
        return (
          <p key={dog.id} onClick={() => setbestDog(dog.name)}>
            {dog.name} is a {dog.age} years old {dog.breed}
          </p>
        );
      })}
    </>
  );
}

export default App;
