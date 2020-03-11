import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import TableHead from '../TableHead/TableHead';
import './RowComponent.css';

const RowComponent = ({ rowData, style, index }) => {
  if (index === 0) {
    return (
      <div style={style} className="table-head">
        <TableHead />
      </div>)
  } else {
    return (
      <div style={style} className={index % 2 ? 'row odd' : 'row even'}>
        <div className={index % 2 ? 'row-cell row-number odd' : 'row-cell row-number even'}>{index}</div>
        <div className={index % 2 ? 'row-cell row-name odd' : 'row-cell row-name even'}>{`${rowData.name.first} ${rowData.name.last}`}</div>
        <div className="row-cell row-birth-date">{rowData.birthDate}</div>
        <div className="row-cell row-email">{rowData.email}</div>
        <div className="row-cell row-address">{`${rowData.address.city}, ${rowData.address.state}`}</div>
        <div className="row-cell row-job-company">{rowData.job.company}</div>
        <div className="row-cell row-job-position">{rowData.job.position}</div>
        <div className="row-cell row-salary">{rowData.salary}</div>
        <div className="row-cell row-lang">{rowData.lang}</div>
        <div className="row-cell row-car">{rowData.isPersonalCar ? 'Yes' : 'No'}</div>
        <div className="row-cell row-hobby">{rowData.hobby}</div>
        <Stars rowData={rowData} />
      </div>
    );
  }
}

const Stars = ({ rowData }) => {
  let count = rowData.rating;
  let string = '';
  while (count > 0) {
    string = string + `<i class="far fa-star"></i>`;
    count = count - 1;
  }
  return (<div className="row-cell row-rating">{ReactHtmlParser(string)}</div>);
}

export default RowComponent;