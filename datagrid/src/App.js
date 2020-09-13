import React from 'react';
import { connect } from 'react-redux';
import { changeRowsData } from './store/actions';
import SimpleTable from "./components/Table/SimpleTable/SimpleTable";
import VirtualizedTable from "./components/Table/VirtualizedTable/VirtualizedTable";
import TableControls from "./components/TableControls/TableControls";
import ColumnSelect from "./components/ColumnSelect/ColumnSelect";
import './App.css';
import data from "./data/data";

class App extends React.Component {
  componentDidUpdate(prevProps) {
    const { mainFilterText,
      nameFilterText,
      locationFilterText,
      isCarYes, isCarNo,
      languages,
      rating, sortName, columns } = this.props;
    if (mainFilterText !== prevProps.mainFilterText ||
      nameFilterText !== prevProps.nameFilterText ||
      locationFilterText !== prevProps.locationFilterText ||
      isCarYes !== prevProps.isCarYes ||
      isCarNo !== prevProps.isCarNo ||
      languages !== prevProps.languages ||
      rating !== prevProps.rating ||
      sortName !== prevProps.sortName ||
      columns !== prevProps.columns) {
      this.filterAndSortData();
    }
  }

  filterAndSortData() {
    const { mainFilterText,
      nameFilterText,
      locationFilterText,
      changeRowsData,
      isCarYes, isCarNo,
      languages,
      rating, sortName } = this.props;

      let arr = data;

    
      if (sortName === 'up') {
        arr.sort((a, b) => a.name > b.name ? 1 : -1);
      }

      if (sortName === 'down') {
        arr.sort((a, b) => a.name < b.name ? 1 : -1);
      }

      if (sortName === 'no') {
        arr.sort((a, b) => a.id > b.id ? 1 : -1);
      }

    let selectedLanguages = [];
    if (languages) {
      selectedLanguages = languages.map(item => item.value);
    }

    let selectedRating = [];
    if (rating) {
      selectedRating = rating.map(item => item.value);
    }

    let rows = [];
    arr.forEach(item => {
      const { name, location, job, isPersonalCar, lang, rating, birthDate, salary } = item;
      const mainFilteredString = `${name} ${location} ${job} ${lang} ${birthDate} ${salary} ${isPersonalCar ? 'yes' : 'no'}`;

      if (mainFilteredString.toLowerCase().indexOf(mainFilterText.toLowerCase()) === -1 ||
        name.toLowerCase().indexOf(nameFilterText.toLowerCase()) === -1 ||
        location.toLowerCase().indexOf(locationFilterText.toLowerCase()) === -1 ||
        (!isCarYes && isPersonalCar) ||
        (!isCarNo && !isPersonalCar) ||
        (selectedLanguages.length > 0 && selectedLanguages.indexOf(lang) === -1) ||
        (selectedRating.length > 0 && selectedRating.indexOf(rating) === -1)) {
        return;
      }
      rows.push(item);
    });
    changeRowsData(rows);
  }

  render() {
    return (
      <div className="app-wrapper">
        <main className="main">
          <div className="table-container">
            <h1 className="app-title">Data table</h1>
            <ColumnSelect />
            {this.props.isTableVirtualization ? <VirtualizedTable /> : <SimpleTable />}
          </div>
          <TableControls />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rowsData: state.rowsData,
    mainFilterText: state.mainFilterText,
    nameFilterText: state.nameFilterText,
    locationFilterText: state.locationFilterText,
    isCarYes: state.isCarYes,
    isCarNo: state.isCarNo,
    languages: state.languages,
    rating: state.rating,
    isTableVirtualization: state.isTableVirtualization,
    sortName: state.sortName,
    columns: state.columns
  }
}

const mapDispatchToProps = {
  changeRowsData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);