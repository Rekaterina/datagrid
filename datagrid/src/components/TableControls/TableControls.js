import React from 'react';
import AllFieldsSearchInput from "./SearchInputs/AllFieldsSearchInput";
import NameSearchInput from "./SearchInputs/NameSearchInput";
import LocationSearchInput from "./SearchInputs/LocationSearchInput";
import CheckBoxFilter from "./CheckBoxFilter/CheckBoxFilter";
import LangSelect from "./Select/LangSelect";
import RatingSelect from "./Select/RatingSelect";
import ExportButton from "./ExportButton/ExportButton";
import Sorting from "./Sorting/Sorting";
import CheckBoxTableVirtualization from "./CheckBoxTableVirtualization/CheckBoxTableVirtualization";
import './TableControls.css';

class TableControls extends React.Component {
  
  render() {
    return (
    <div className="table-controls">
      <p className="title">Filters</p>
      <AllFieldsSearchInput /> 
      <NameSearchInput /> 
      <LocationSearchInput /> 
      <LangSelect />
      <RatingSelect />
      <CheckBoxFilter />
      <p className="title">Sorting</p>
      <Sorting />
      <p className="title">Settings</p>
      <CheckBoxTableVirtualization />
      <ExportButton />
    </div>
    )
  }
}

export default TableControls;