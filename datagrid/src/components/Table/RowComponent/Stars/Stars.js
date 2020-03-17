import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Stars = ({ rowData, arrTitle, columns }) => {
  let count = rowData.rating;
  let string = '';
  while (count > 0) {
    string = string + `<i class="far fa-star"></i>`;
    count = count - 1;
  }
  return (
    <div className={columns && arrTitle.includes('Rating') ? 'row-cell row-rating' : 'row-cell row-rating hidden'}>
      {ReactHtmlParser(string)}
    </div>);
}

export default Stars;