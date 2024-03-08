// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

interface Circle {
  id: number;
  isVisible: boolean;
}

const App: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>(generateInitialCircles());

  function generateInitialCircles() {
    const rows = 5;
    const cols = 5;

    let id = 1;
    const initialCircles: Circle[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        initialCircles.push({
          id,
          isVisible: true,
        });
        id++;
      }
      // Skip one circle in every odd row to create a hexagonal pattern
      if (row % 2 === 0) {
        id++;
      }
    }

    return initialCircles;
  }

  const handleClick = (id: number) => {
    setCircles((prevCircles) =>
      prevCircles.map((circle) =>
        circle.id === id ? { ...circle, isVisible: !circle.isVisible } : circle
      )
    );
  };

  return (
    <div className="app">
      <div className="hex-grid">
        {circles.map((circle) => (
          <div
            key={circle.id}
            data-testid={circle.id}
            className={`circle ${circle.isVisible ? 'visible' : 'hidden'}`}
            onClick={() => handleClick(circle.id)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
