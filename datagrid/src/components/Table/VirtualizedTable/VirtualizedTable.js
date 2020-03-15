import React from 'react';
import { connect } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
//import TableHead from '../TableHead/TableHead';
import RowComponent from '../RowComponent/RowComponent';
import NoDataImage from '../NoDataImage/NoDataImage';
import './VirtualizedTable.css';


class VirtualizedTable extends React.Component {
  render() {
    const { rowsData, isTableVirtualization } = this.props;
    const Row = ({ index, style }) => {
      return (<RowComponent rowData={rowsData[index - 1]} style={style} index={index} table={isTableVirtualization} />);
    }
    if (rowsData.length > 0) {
      return (<>
        {/* <div className="table-head">
            <TableHead />
          </div> */}
        <List
          className="list"
          height={617}
          itemCount={rowsData.length + 1}
          itemSize={55}
          width={1100}>
          {Row}
        </List>
        </>
      )
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

export default connect(mapStateToProps)(VirtualizedTable);