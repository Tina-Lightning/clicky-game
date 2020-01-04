import React from "react";
import "./style.css";

function Calendar() {
    let tempDate = new Date();
    let date = tempDate.getFullYear();
   
    return (
      <span>{date}</span>
    );
  }

  export default Calendar;