import React from 'react';
import { connect } from 'react-redux';
import { changeRowsData } from '../../store/actions';
import { FixedSizeList as List } from 'react-window';

import RowComponent from './RowComponent/RowComponent';
import data from "../../data/data";
import './Table.css';


class Table extends React.Component {

  filterData() {
    let rows = [];
    data.forEach(item => {
      if (item.address.city.indexOf(this.props.mainFilterText) === -1) {
        return;
      }
      rows.push(item);
    });
    console.log(rows);
    this.props.changeRowsData(rows);
    console.log(this.props);
  }

  render() {
    this.filterData();
    const Row = ({ index, style }) => { 
      
      return (<RowComponent rowData={this.props.rowsData[index-1]} style={style} index={index}/>);
    } 
    return (
        <List
          className="list"
          height={700}
          itemCount={26}
          // itemCount={this.props.rowsData.length + 1}
          itemSize={45}
          width={1300}>
          {Row}
        </List>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    rowsData: state.rowsData,
    mainFilterText: state.mainFilterText
  }
}

const mapDispatchToProps = {
  changeRowsData
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);