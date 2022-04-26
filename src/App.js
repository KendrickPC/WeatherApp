import React from 'react';
const api = {
  key: "26d9ffa17f030d4e091f898584a18440",
  base: "https://openweathermap.org/api",
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Here"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
