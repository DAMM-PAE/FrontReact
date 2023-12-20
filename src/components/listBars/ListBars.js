import React from "react";
import "./ListBars.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Pagination from "./Pagination";

function ListBars({ filteredBars }) {

  const navigate = useNavigate();
  const barsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBar = currentPage * barsPerPage;
  const indexOfFirstBar = indexOfLastBar - barsPerPage;
  const currentBars = filteredBars.slice(indexOfFirstBar, indexOfLastBar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleClick = (bar) => {
    console.log(bar);
    navigate(`/bar/${bar.id}`, { state: { bar } });
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '70rem' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '14px' }}>
        <tbody>
          {currentBars.map((bar) => {
            const rowStyle = bar.iot ? { background: 'rgba(255, 255, 153, 0.45)' } : {};

            return (
              <tr key={bar.id} style={rowStyle} onClick={() => handleClick(bar)}>
                <td style={{
                  padding: '8px',
                  maxWidth: '60px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  textAlign: 'left',
                  borderRadius: '5px 0 0 5px'
                }} title={bar.nom}>{bar.nom ?? ' '}</td>
                <td style={{
                  padding: '8px',
                  textAlign: 'left',
                  maxWidth: '50px'
                }}>{`${bar.provincia ? bar.provincia + '/' : ''}${bar.ciutat ?? ' '}`}</td>
                <td style={{
                  padding: '8px',
                  textAlign: 'center'
                }}>{bar.percentatge ?? ' '}</td>
                <td style={{
                  padding: '8px',
                  textAlign: 'center',
                  borderRadius: '0 5px 5px 0'
                }}>{bar.data}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
            barsPerPage={barsPerPage}
            totalBars={filteredBars.length}
            currentPage={currentPage}
            paginate={paginate}
          />
    </div>

      
  );
}

export default ListBars;
