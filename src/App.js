import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Information from './components/Information';

const api = {
  key:"3f72d445a8998a55717a1068e3d1e180",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({});

  return (
    <div className={(typeof weather.main !== "undefined") ? ((weather.main.temp > 16) ? "app warm" : "app") : "app"}>
      <main>
        <div className="search-box">
          <Search 
            api={api}
            input={input} 
            setInput={setInput} 
            weather={weather} 
            setWeather={setWeather}
          />
          {(typeof weather.main !== "undefined") ? (
            <Information weather={weather}/>
          ) : ('')}
        </div>
      </main>
    </div>
  );
}

export default App;
