import React from "react";
import { auto } from "manate/react";

import store from "./store";

const App: React.FC = auto(() => {
  console.log("Hello, React with Bun and TypeScript!");
  return (
    <div>
      <h1>{store.counter}</h1>
      <button onClick={() => (store.counter += 1)}>Increment</button>
    </div>
  );
});

export default App;
