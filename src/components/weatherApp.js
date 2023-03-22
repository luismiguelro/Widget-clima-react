import { useState } from "react"
import WeatherForm from "./weatherForm"

export default function WeatherApp(){
    // solicitud http: weather: objeto respuesta
    const [weather,setWeather] = useState(null)

    // obtener informacion de la api: async
    async function loadInfo(city='london'){
        try {
            // llamar variables de entorno
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            // transforma informacion
            const json = request.json();

            console.log(json);
        } catch (error) {
            
        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }
    return <div>
       <WeatherForm onChangeCity={handleChangeCity}/>
        <div>Info</div>
    </div>
}