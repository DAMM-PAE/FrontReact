import React, { useState } from "react";

function Pagination({ barsPerPage, totalBars, currentPage, paginate }) {
  const totalPages = Math.ceil(totalBars / barsPerPage);
  const [inputPage, setInputPage] = useState(currentPage);

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
    <nav>
      <ul className="pagination">
        {currentPage !== 1 && (
          <li className="page-item">
            <a
              onClick={() => paginate(currentPage - 1)}
              href="#"
              className="page-link"
            >
              Anterior
            </a>
          </li>
        )}

        {currentPage !== totalPages && (
          <li className="page-item">
            <a
              onClick={() => paginate(currentPage + 1)}
              href="#"
              className="page-link"
            >
              Següent
            </a>
          </li>
        )}

        <li className="page-item">
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
      </ul>
    </nav>
  );
}

export default Pagination;
