import React , {useState} from 'react';
import axios from 'axios';

const App = () => {
  
  const [data , setData] = useState({});
  const [location , setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6913c81962c4052d9b82c97fcc4de6b6`

  const searchLocation = (event) => {
    if(event.key === "Enter"){
      axios.get(url)
        .then((response) => {
          setData(response.data)
          console.log(response.data)
        })
    setLocation("");

    }
  }


  return (
    <div className='app'>
      <div className="search">
        <input 
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter your CITY"  
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {/* if data main baray yek city nabod neshonesh nade na inke error bede barname */}
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {/* bayad be sorta [] benevisim */}
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && 
          <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity} %</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default App



