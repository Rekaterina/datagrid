import React from 'react';

import AllFieldsSearchInput from "./SearchInputs/AllFieldsSearchInput";
import NameSearchInput from "./SearchInputs/NameSearchInput";
import LocationSearchInput from "./SearchInputs/LocationSearchInput";
import CheckBoxFilter from "./CheckBoxFilter/CheckBoxFilter";
import LangSelect from "./Select/LangSelect";
import RatingSelect from "./Select/RatingSelect";
import ExportButton from "./ExportButton/ExportButton";
import './TableControls.css';

class TableControls extends React.Component {
  
  render() {
    return (
    <div className="table-controls">
      <AllFieldsSearchInput /> 
      <NameSearchInput /> 
      <LocationSearchInput /> 
      <LangSelect />
      <RatingSelect />
      <CheckBoxFilter />
      <ExportButton />
    </div>
    )
  }
}

export default TableControls;