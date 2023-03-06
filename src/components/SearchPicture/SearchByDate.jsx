import { Calendar as CalendarIcon } from "react-bootstrap-icons";
import React, { useState,useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import s from "./style.module.css";


const SearchByDate = ({onSubmit}) => {
  const [value, submit] = useState(new Date()); 
  
  function submit1(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      alert(1)
      onSubmit(e.target.value);
    }
  }

  useEffect(() => {      
    submit1(); 
  }, []);

  return (
    <>       
    <input
        onChange={submit}
        className={s.input}
        type="text"
        placeholder={"dd/mm/yyyy"}      
        value={value}             
      />
      <DateTimePicker className={s.date}
      onChange={submit} 
      value={value} 
      format={"dd-mm-yyyy"}
      maxDate={new Date()}
      disableClock={true}
      />
      <CalendarIcon className={s.icon} />
    </>
  );
};
/*
<input
        onChange={submit}
        className={s.input}
        type="text"
        placeholder={"dd/mm/yyyy"}      
        value={value}             
      />
*/
/*
      <DateTimePicker 
      onChange={onChange} 
      value={value} 
      dateFormat="dd-mm-yyyy"
      />
      */

export default SearchByDate;
