import React from 'react';

import './TableHead.css';

class TableHead extends React.Component {
  render() {
    return (
    <>
        <div className="table-head-cell table-head-number">No.</div>
        <div className="table-head-cell table-head-name">Name</div>
        <div className="table-head-cell table-head-birth date">Birth date</div>
        <div className="table-head-cell table-head-email">Email</div>
        <div className="table-head-cell table-head-address">Address</div>
        <div className="table-head-cell table-head-job-company">Job company</div>
        <div className="table-head-cell table-head-job-position">Job position</div>
        <div className="table-head-cell table-head-salary">Salary</div>
        <div className="table-head-cell table-head-lang">Foreign language</div>
        <div className="table-head-cell table-head-car">Personal car</div>
        <div className="table-head-cell table-head-hobby">Hobby</div>
        <div className="table-head-cell table-head-rating">Rating</div>
        </>
    )
  }
}

export default TableHead;