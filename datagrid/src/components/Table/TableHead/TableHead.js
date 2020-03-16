import React from 'react';
import './TableHead.css';

class TableHead extends React.Component {
  render() {
    return (
      <div className="table-head-row row">
        <div className="table-head-cell table-head-number"></div>
        <div className="table-head-cell table-head-name">Name</div>
        <div className="table-head-cell table-head-birth-date">Birth date</div>
        <div className="table-head-cell table-head-location">Location</div>
        <div className="table-head-cell table-head-job">Job position</div>
        <div className="table-head-cell table-head-salary">Salary</div>
        <div className="table-head-cell table-head-lang">Foreign language</div>
        <div className="table-head-cell table-head-car">Personal car</div>
        <div className="table-head-cell table-head-rating">Rating</div>
      </div>
    )
  }
}

export default TableHead;