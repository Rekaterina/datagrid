import React from 'react';
import { connect } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import RowComponent from './RowComponent/RowComponent';
import './Table.css';


class Table extends React.Component {
  render() {
    const { rowsData } = this.props;
    const Row = ({ index, style }) => {
      return (<RowComponent rowData={rowsData[index - 1]} style={style} index={index} />);
    }
    return (
      <List
        className="list"
        height={617}
        itemCount={rowsData.length + 1}
        itemSize={55}
        width={1100}>
        {Row}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rowsData: state.rowsData,
  }
}

export default connect(mapStateToProps)(Table);