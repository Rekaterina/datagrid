import React from 'react';
import TableHead from '../TableHead/TableHead';
import { connect } from 'react-redux';
import Stars from './Stars/Stars';
import './RowComponent.css';

class RowComponent extends React.Component {
  render() {
    const { columns, rowData, style, index, table } = this.props;
    let arrTitle;
    if (columns) {
      arrTitle = columns.map(item => item.value);
    }
    if (index === 0 && table) {
      return (
        <div className="table-head">
          <TableHead />
        </div>)
    } else {
      return (
        <div style={style} className={index % 2 ? 'row odd' : 'row even'}>
          <div className={index % 2 ? 'row-cell row-number odd' : 'row-cell row-number even'}>{rowData.id}</div>
          <div className={index % 2 ? 'row-cell row-name odd' : 'row-cell row-name even'}>{rowData.name}</div>
          <div className={columns && arrTitle.includes('BirthDate') ? 'row-cell row-birth-date' : 'row-cell row-birth-date hidden'}>{rowData.birthDate}</div>
          <div className={columns && arrTitle.includes('Location') ? 'row-cell row-location' : 'row-cell row-location hidden'}>{rowData.location}</div>
          <div className={columns && arrTitle.includes('JobPosition') ? 'row-cell row-job' : 'row-cell row-job hidden'}>{rowData.job}</div>
          <div className={columns && arrTitle.includes('Salary') ? 'row-cell row-salary' : 'row-cell row-salary hidden'}>{rowData.salary}</div>
          <div className={columns && arrTitle.includes('ForeignLanguage') ? 'row-cell row-lang' : 'row-cell row-lang hidden'}>{rowData.lang}</div>
          <div className={columns && arrTitle.includes('PersonalCar') ? 'row-cell row-car' : 'row-cell row-car hidden'}>{rowData.isPersonalCar ? 'Yes' : 'No'}</div>
          <Stars rowData={rowData} arrTitle={arrTitle} columns={columns} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    columns: state.columns
  }
}

export default connect(mapStateToProps)(RowComponent);