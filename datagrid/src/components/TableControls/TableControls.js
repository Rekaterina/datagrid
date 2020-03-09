import React from 'react';

import SearchInput from "./SearchInput/SearchInput";
import './TableControls.css';

class TableControls extends React.Component {
  render() {
    return (
    <div className="table-controls">
      <SearchInput /> 
    </div>
    )
  }
}

export default TableControls;