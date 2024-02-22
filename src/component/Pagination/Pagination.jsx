import React from 'react';
import './Pagination.css'

export default function Pagination({page,handlePage}) {

    const handlePages =(page1) =>{
        handlePage(page1)
    }
  return (
    <div className="pagination">
<a href="#" onClick={() => handlePages(Math.max(page - 1, 1))} disabled={page === 1}>
        &laquo;
      </a>
      <a href="#" onClick={() => handlePages(Math.max(page - 1, 1))} disabled={page === 1}>
        {page - 1}
      </a>
      <a href="#" className="active">
        {page}
      </a>
      <a href="#" onClick={() => handlePages(page + 1)}>
        {page + 1}
      </a>
      <a href="#" onClick={() => handlePages(page + 2)}>
        {page + 2}
      </a>
      <a href="#" onClick={() => handlePages(page + 1)} disabled={page === 10}>
        &raquo;
      </a>
    </div>
  )
}
