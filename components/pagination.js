import {  useState } from "react";

export const Pagination = ({ data, dataLimit, }) => {
   
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
console.log("@@@@",getPaginatedData())
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / dataLimit) * dataLimit;
    return new Array(dataLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <nav aria-label="Page navigation example">
        
      <ul className="pagination">
        <li
          className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={goToPreviousPage}
        >
          <button className="page-link " disabled={true}>
            Previous
          </button>
        </li>
        {pages > 0 &&
          getPaginationGroup().map((item, index) => {
            return (
              <li
                key={index}
                className={`page-item ${
                  currentPage === item  ? "active" : null
                }`}
                onClick={changePage}
              >
                <a className="page-link">{item }</a>
              </li>
            );
          })}

        <li className={`page-item ${currentPage === pages ? "disabled" : ""}`}>
          <button className="page-link" onClick={goToNextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
