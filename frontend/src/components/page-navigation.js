import React, { useState, useEffect } from "react";

export default function PageNavigation ({ position = "center", pageNum, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageList, setPageList] = useState([]);
    
    useEffect(() => {
        let arr = [];
        for(let i = 1; i <= pageNum; i++) {
            arr.push(<li key={i} className="page-item"><button className="page-link" onClick={() => setCurrentPage(i)}>{i}</button></li>)
        };
        setPageList(arr);
    }, [pageNum]);

    useEffect(() => {
        onPageChange(currentPage);
    }, [currentPage]);

    return (
        <div className="page-navigation mt-3">
            <nav aria-label="Page navigation">
                <ul className={`pagination justify-content-${position}`}>
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" aria-label="Previous" onClick={() => setCurrentPage(prevState => prevState - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    {pageList}
                    <li className={`page-item ${currentPage === pageNum ? "disabled" : ""}`}>
                        <button className="page-link" aria-label="Next" onClick={() => setCurrentPage(prevState => prevState + 1)}>
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
