import React from 'react';
import { connect } from 'react-redux';
import { changeRowsData } from './store/actions';
import Table from "./components/Table/Table";
import TableControls from "./components/TableControls/TableControls";
import './App.css';
import data from "./data/data";

class App extends React.Component {
  filterData(prevProps) {
    const { mainFilterText, nameFilterText, locationFilterText, changeRowsData, isCarYes, isCarNo, languages, rating } = this.props;
    if (mainFilterText !== prevProps.mainFilterText ||
      nameFilterText !== prevProps.nameFilterText ||
      locationFilterText !== prevProps.locationFilterText ||
      isCarYes !== prevProps.isCarYes ||
      isCarNo !== prevProps.isCarNo ||
      languages !== prevProps.languages ||
      rating !== prevProps.rating) {
      
      let selectedLanguages = [];
      if (languages) {
        selectedLanguages = languages.map(item => item.value);
      }

      let selectedRating = [];
      if (rating) {
        selectedRating = rating.map(item => item.value);
      }

      let rows = [];
      data.forEach(item => {
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
  }
  
  componentDidUpdate(prevProps) {
    this.filterData(prevProps);
  }

  render() {  
    return (
      <div className="app-wrapper">
        <header className="header">
          <h1 className="app-title">Data table</h1>
        </header>
        <main className="main">
          <Table />
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
    rating: state.rating
  }
}

const mapDispatchToProps = {
  changeRowsData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);