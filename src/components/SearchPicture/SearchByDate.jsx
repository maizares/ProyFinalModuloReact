import { Calendar as CalendarIcon } from "react-bootstrap-icons";
import React, { useState,useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import s from "./style.module.css";


const SearchByDate = ({onSubmit}) => {
  
  const [msj, setMsj] = useState("Presione enter para buscar"); 

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      let v_date = e.target.value;
      let v_arr  = v_date.split("-");
      let valido = false;

      if(v_arr.length==3){        
        let anio = parseInt(v_arr[0]);
        let mes  = parseInt(v_arr[1]);
        let dia  = parseInt(v_arr[2]); 

        valido = (anio.length == 4)? true : false;
        valido = (mes.length == 1 || mes.length == 2 && (mes > 0 && mes < 12))? true : false;
        valido = (dia.length == 1 || dia.length == 2 && (dia > 0 && dia < 32))? true : false;
      }
      
      if(!valido){
        setMsj("Error: formato no valido");
        e.target.value=""
      }
      else{
        setMsj("Buscando...");
        onSubmit(e.target.value);
        setMsj("Presione enter para buscar");
      }
    }
  }  

  return (
    <>       
    <input
        onKeyUp={submit}        
        type="text"
        placeholder={"yyyy-mm-dd"}              
      />
    <div className={s.msj}>{msj}</div>
    </>
  );
};


export default SearchByDate;
