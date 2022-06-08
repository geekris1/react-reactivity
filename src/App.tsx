import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useReactive } from "./hoos/useReactive";

function App() {
  const proxy = useReactive({ count: 0 });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello vue Reactivity + React!</p>
        <p>
          <button type="button" onClick={() => (proxy.count += 1)}>
            count is: {proxy.count}
          </button>
        </p>
        <p>
          by <code>geerksi1</code>
        </p>
        <p></p>
      </header>
    </div>
  );
}

export default App;
