import { Calendar as CalendarIcon } from "react-bootstrap-icons";
import React, { useState,useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import s from "./style.module.css";


const SearchByDate = ({onSubmit}) => {
  
  const [msj, setMsj] = useState("Presione enter para buscar"); 

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      let v_date = e.target.value;
          v_date = v_date.replace("/","-");
      let v_arr  = v_date.split("-");
      let valido = false;

      if(v_arr.length==3){        
        let anio = v_arr[0];
        let mes  = v_arr[1];
        let dia  = v_arr[2];   

        valido   = (anio.length == 4)? true : false;
        anio     = parseInt(anio);

        if(mes.length == 1 || mes.length == 2 && valido) {
          mes    = parseInt(mes);
          valido = (mes > 0 && mes < 13)? true : false;
        }
        else{
          valido = false;
        }
        
        if(dia.length == 1 || dia.length == 2 && valido){          
          dia    = parseInt(dia);
          valido = (dia > 0 && dia < 32)? true : false;
        }
        else{
          valido = false;
        }
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
