import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./calendari.css";
import { ca } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

function Calendari() {
  const [dateRanges, setDateRanges] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);

  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("Fechas seleccionadas:", dateRanges);
    navigate("/", { state: { dateRanges } });
  };

  const handleNavigateOut = () => {
    navigate("/");
  };

  return (
    <div className="calendari-container">
      <div className="boto_close">
        <button className="close_NI" onClick={handleNavigateOut} type="button">
          <span className="creu">X</span>
        </button>
      </div>
      <div className="calendari">
        <label htmlFor="calendari">Escull un rang de dates</label>
        <DateRange
          onChange={(ranges) => {
            setDateRanges([ranges.selection]);
            console.log("Fechas seleccionadas:", ranges.selection);
          }}
          ranges={dateRanges}
          minDate={new Date()}
          maxDate={maxDate}
          locale={ca}
        />
      </div>
      <div className="boto-container">
        <button className="boto" type="button" onClick={handleNavigate}>
          <span className="text">Fet!</span>
        </button>
      </div>
    </div>
  );
}

export default Calendari;
