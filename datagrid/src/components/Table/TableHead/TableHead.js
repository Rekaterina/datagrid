import React from 'react';

import NameTitle from './Title/NameTitle';
import LocationTitle from './Title/LocationTitle';
import './TableHead.css';

class TableHead extends React.Component {
  render() {
    const divStyle = {
      position: 'relative',
      left: '0px',
      zIndex: '1',
    };

    const divStyle1 = {
      position: 'sticky',
      left: '0px',
      zIndex: '4',
    };

    
    return (
    <>
        <div className="table-head-cell table-head-number" style={divStyle1}>No.</div>
        <NameTitle />
        <div className="table-head-cell table-head-birth-date" style={divStyle}>Birth date</div>
        <LocationTitle />
        <div className="table-head-cell table-head-job" style={divStyle}>Job position</div>
        <div className="table-head-cell table-head-salary" style={divStyle}>Salary</div>
        <div className="table-head-cell table-head-lang" style={divStyle}>Foreign language</div>
        <div className="table-head-cell table-head-car" style={divStyle}>Personal car</div>
        <div className="table-head-cell table-head-rating" style={divStyle}>Rating</div>
        </>
    )
  }
}

export default TableHead;