import React, { useState, useEffect } from 'react';
import styles from "./weatherMainInfo.module.css";


export default function WeatherMainInfo({weather}){
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    useEffect(() => {
        if (weather) {
          const color = getBackgroundColor(weather);
          setBackgroundColor(color);
        }
      }, [weather]);
    function getBackgroundColor(weatherData) {
        const isDay = weatherData.current.is_day === 1;
        const condition = weatherData.current.condition.text.toLowerCase();
        const temperature = weatherData.current.temp_c;
    
        if (isDay) {
          if (condition.includes('sunny')) {
            return '#ffff99';
          } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            return '#b3c6ff';
          } else if (temperature >= 30) {
            return '#ff6666';
          } else if (temperature <= 10) {
            return '#b3d9ff';
          } else {
            return '#ffffff';
          }
        } else {
          if (condition.includes('clear')) {
            return '#000033';
          } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            return '#666699';
          } else {
            return '#333333';
          }
        }
      }
    
    return(
        <div style={{backgroundColor}} className={styles.mainInfo}>
            <div className={styles.city}>{weather?.location.name}</div>
            <div className={styles.country} >{weather?.location.country}</div>

            <div className={styles.row}>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`} 
                    width="128px" 
                    alt={weather?.current.condition.text}
                    />
                </div>
                <div className={styles.weatherConditions}>
                   <div className={styles.condition}>{weather?.current.condition.text}</div> 
                   <div className={styles.current}>{weather?.current.temp_c}°C / {weather?.current.temp_f}°F</div> 
                </div>
            </div>
            <iframe 
            title={`Mapa:${weather?.location.name}`}
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
            width="100%"
            height="350"
            style={{ border: 0 }}
          ></iframe>
        </div>
        
    );
}