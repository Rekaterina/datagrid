import React from 'react';
import { connect } from 'react-redux';
import RowComponent from '../RowComponent/RowComponent';
import TableHead from '../TableHead/TableHead';
import NoDataImage from '../NoDataImage/NoDataImage';
import './SimpleTable.css';

class SimpleTable extends React.Component {
  render() {
    const { rowsData, isTableVirtualization } = this.props;
    const rowItems = rowsData.map((item, index) =>
      <RowComponent rowData={rowsData[index]} index={index} key={item.id} table={isTableVirtualization} />
    );
    if (rowsData.length > 0) {
      return (
        <div className="simple-table">
          <div className="table-head">
            <TableHead />
          </div>
          {rowItems}
        </div>
      );
    } else {
      return <NoDataImage />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    rowsData: state.rowsData,
    isTableVirtualization: state.isTableVirtualization
  }
}

export default connect(mapStateToProps)(SimpleTable);