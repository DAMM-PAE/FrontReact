import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./calendari.css";
import { ca } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

function Calendari() {

    // Inicializa startDate y endDate con la fecha actual
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 2);

    const navigate = useNavigate();

    const handleNavigate = () => {
      console.log("Fecha de inicio:", startDate);
      console.log("Fecha de fin:", endDate);
      navigate('/', {state: { startDate: startDate, endDate: endDate  }})
    }

    const handleNavigateOut = () => {
      navigate('/');
    }

  return (
    <div className="calendari-container">
  <div className="boto_close">
    <button className="close_NI" onClick={handleNavigateOut} type="button">
      <span className='creu'>X</span>
    </button>
  </div>
  <div className="calendari">
    <label htmlFor="calendari">Escull un rang de dates</label>
    <DateRange
      onChange={(ranges) => {
        const { selection } = ranges;
        setStartDate(selection.startDate);
        setEndDate(selection.endDate);
        console.log("Fecha de inicio:", selection.startDate);
        console.log("Fecha de fin:", selection.endDate);
      }}
      ranges={[
        {
          startDate: startDate,
          endDate: endDate,
          key: "selection",
        },
      ]}
      minDate={new Date()}
      maxDate={maxDate}
      locale={ca}
    />
  </div>
  <div className="boto-container">
    <button className="boto" type="button" onClick={handleNavigate}>
      <span className='text'>Fet!</span>
    </button>
  </div>
</div>
  );
}

export default Calendari;