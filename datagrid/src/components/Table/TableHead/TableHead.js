import React from 'react';
import { connect } from 'react-redux';
import './TableHead.css';

class TableHead extends React.Component {
  render() {
    const { columns, sortName } = this.props;
    let arrTitle;
    if (columns) {
      arrTitle = columns.map(item => item.value);
    }
    return (
      <div className="table-head-row row">
        <div className='table-head-cell table-head-number'>No.</div>
        <div className={sortName === 'no' ? 'table-head-cell table-head-name' : 'table-head-cell table-head-name title-active'}>Name</div>
        <div className={columns && arrTitle.includes('BirthDate') ? 'table-head-cell table-head-birth-date' : 'table-head-cell table-head-birth-date hidden'}>Birth date</div>
        <div className={columns && arrTitle.includes('Location') ? 'table-head-cell table-head-location' : 'table-head-cell table-head-location hidden'}>Location</div>
        <div className={columns && arrTitle.includes('JobPosition') ? 'table-head-cell table-head-job' : 'table-head-cell table-head-job hidden'}>Job position</div>
        <div className={columns && arrTitle.includes('Salary') ? 'table-head-cell table-head-salary' : 'table-head-cell table-head-salary hidden'}>Salary</div>
        <div className={columns && arrTitle.includes('ForeignLanguage') ? 'table-head-cell table-head-lang' : 'table-head-cell table-head-lang hidden'}>Foreign language</div>
        <div className={columns && arrTitle.includes('PersonalCar') ? 'table-head-cell table-head-car' : 'table-head-cell table-head-car hidden'}>Personal car</div>
        <div className={columns && arrTitle.includes('Rating') ? 'table-head-cell table-head-rating' : 'table-head-cell table-head-rating hidden'}>Rating</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    columns: state.columns,
    sortName: state.sortName
  }
}

export default connect(mapStateToProps)(TableHead);