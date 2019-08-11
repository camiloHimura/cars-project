import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styles';
const ITEMS_PER_PAGE = 10;
function Pagination(props){
  console.log('---- Pagination ----', props)
  const {pageSelected, totalCarsCount, setPage} = props; 
  let totalPages = Math.ceil(totalCarsCount / ITEMS_PER_PAGE);
  let isFirst = pageSelected == 1;
  let isLast = pageSelected == totalPages;

  function nextPage(){
    setPage(pageSelected + 1);
  }

  function lastPage(){
    setPage(totalPages);
  }

  function previousPage(){
    setPage(pageSelected - 1);
  }

  function firstPage(){
    setPage(1);
  }
  
  return  <Wrapper>
            <div>{!isFirst && <a onClick={firstPage}>First</a>}</div>
            <div>{!isFirst && <a onClick={previousPage}>Previous</a>}</div>
            <div><p>Page {pageSelected} of {totalPages}</p></div>
            <div>{!isLast && <a onClick={nextPage}>Next</a>}</div>
            <div>{!isLast && <a onClick={lastPage}>Last</a>}</div>
          </Wrapper>
}

Pagination.propTypes = {
    setPage: PropTypes.func,
    pageSelected: PropTypes.number,
    totalCarsCount: PropTypes.number
  }
  
  
export default Pagination;
