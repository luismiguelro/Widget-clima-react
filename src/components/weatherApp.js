import { useState , useEffect} from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from "./weatherApp.module.css";
import Loading from "./loading"

//variables
const REACT_APP_URL="http://api.weatherapi.com/v1/current.json?aqi=no"
const REACT_APP_KEY="b691aa0958ea408c95f172101232203" 


export default function WeatherApp() {
   // solicitud http: weather: objeto respuesta
  const [weather, setWeather] = useState(null);


  // cargar opcion por defecto: usando useEffect(efectos laterales): 
  //ejecutar codigo al cargar app, render,destruccion componente

  //calback{}, arreglo dependencias[]
  useEffect(()=>{
    // ejecuta cuando se crea componente
    loadInfo();
  },[]);

  // especificar useEffect tanto como quiera
  useEffect(()=>{
    // si no se coloca [], se ejecutará cada vez que hay un renderizado, y dentro de [], se ejecuta cada que algo en el estado cambie
    document.title=`Wheather | ${weather?.location.name ?? ''}`
  },[weather]);


   // obtener informacion de la api: async
  async function loadInfo(city = "london") {
    console.log(
      //`${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`
    );
      // transforma informacion
    try {
      const request = await fetch(
        `${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();

      setTimeout(()=>{

      },2000);
      // enviar al estado
      setWeather(json);
     console.log(json);

    } catch (e) {
      console.error(e);
    }
  }
  function handleOnChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }
  return (
    <div className={styles.weatherContainer}>
       <WeatherForm onChangeCity={handleOnChangeCity}/>
       {weather? <WeatherMainInfo weather={weather}/>:<Loading/>}
    </div>
  );
}
