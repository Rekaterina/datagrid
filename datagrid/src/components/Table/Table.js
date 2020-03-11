import React from 'react';
import { connect } from 'react-redux';
import { changeRowsData } from '../../store/actions';
import { FixedSizeList as List } from 'react-window';

import RowComponent from './RowComponent/RowComponent';
import data from "../../data/data";
import './Table.css';


class Table extends React.Component {
  componentDidUpdate(prevProps) {
    const { mainFilterText, nameFilterText, changeRowsData } = this.props;
    if (mainFilterText !== prevProps.mainFilterText ||
      nameFilterText !== prevProps.nameFilterText) {
      let rows = [];

      data.forEach(item => {
        const { name, address, job } = item;
        const { first, last } = name;
        const { city, state } = address;
        const { company, position } = job;
        const mainFilteredString = `${first} ${last} ${city} ${state} ${company} ${position}`;
        const nameFilteredString = `${first} ${last}`;
        if (mainFilteredString.toLowerCase().indexOf(mainFilterText.toLowerCase()) === -1 ||
          nameFilteredString.toLowerCase().indexOf(nameFilterText.toLowerCase()) === -1) {
          return;
        }
        rows.push(item);
      });
      changeRowsData(rows);
    }
  }

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
    mainFilterText: state.mainFilterText,
    nameFilterText: state.nameFilterText
  }
}

const mapDispatchToProps = {
  changeRowsData
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);