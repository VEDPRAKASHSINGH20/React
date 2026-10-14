
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <div className="top">
          <span className="logo">✦</span>
          <span className="tag">MY DASHBOARD</span>
        </div>

        <h1>Hello, Developer 👋</h1>
        <p className="description">
          Every small step takes you closer to your big goals.
        </p>

        <div className="stats">
          <div className="stat">
            <h2>100%</h2>
            <p>Dedication</p>
          </div>

          <div className="stat">
            <h2>{count}</h2>
            <p>Button clicks</p>
          </div>
        </div>

        <button onClick={() => setCount(count + 1)}>
          Keep Going ✨
        </button>

        <p className="footer">Built with React & creativity</p>
      </div>
    </div>
  );
}

export default App;
