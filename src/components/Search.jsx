import React from 'react';

const Search = ({ api, input, setInput, weather, setWeather }) => {

    const search = e => {
        if(e.key === "Enter"){
          fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
          .then(res=>res.json())
          .then(result=>{
            console.log(result);
            setWeather(result);
            setInput("");
          });
        }
      };

    return ( 
        <div>
            <input 
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={e=>setInput(e.target.value)}
                value={input}
                onKeyPress={search}
            />
        </div>
    );
}
 
export default Search;