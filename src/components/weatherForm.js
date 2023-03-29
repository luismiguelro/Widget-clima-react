import { useState } from "react";
import styles from "./weatherForm.module.css";

export default function WeatherForm({onChangeCity}){

    // estado input
    const [city,setCity] = useState('');

    // Actualizar el estado
    function onChange(e){
        //obtener valor
        const value = e.target.value;

        // validar texto vacio
        if(value !== ''){
            setCity(value);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    }

    return (
        // formulario
        <form onSubmit={handleSubmit} className={styles.container}>
            <input type="text" onChange={onChange} className={styles.input}></input>
        </form>
    );
}