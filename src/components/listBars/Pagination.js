import React, { useState, useEffect } from "react";

function Pagination({ barsPerPage, totalBars, currentPage, paginate }) {
  const totalPages = Math.ceil(totalBars / barsPerPage);
  const [inputPage, setInputPage] = useState(currentPage);

  // Este efecto se ejecutará cuando `currentPage` cambie desde fuera
  useEffect(() => {
    setInputPage(currentPage);
  }, [currentPage]);

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handlePageJump = (e) => {
    if (e.key === "Enter") {
      const newPage = parseInt(inputPage, 10);
      if (newPage > 0 && newPage <= totalPages && newPage !== currentPage) {
        paginate(newPage);
      }
    }
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul className="pagination" style={{ listStyle: 'none', display: 'flex', alignItems: 'center', padding: 0 }}>
        {currentPage !== 1 && (
          <li className="page-item">
            <span
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
              style={{ marginRight: '10px', cursor: 'pointer', color: '#d94100' }}
            >
              Anterior
            </span>
          </li>
        )}
  
        <li className="page-item" style={{ margin: '0 10px' }}>
          <span className="page-link">
            Pàgina{" "}
            <input
              type="number"
              value={inputPage}
              onChange={handleInputChange}
              onKeyDown={handlePageJump}
              min="1"
              max={totalPages}
              style={{ width: "50px" }}
            />{" "}
            de {totalPages}
          </span>
        </li>
  
        {currentPage !== totalPages && (
          <li className="page-item">
            <span
              onClick={() => paginate(currentPage + 1)}
              className="page-link"
              style={{ marginLeft: '10px', cursor: 'pointer', color: '#d94100' }}
            >
              Següent
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
