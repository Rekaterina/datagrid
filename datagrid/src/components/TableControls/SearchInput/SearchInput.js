import React from 'react';
import { connect } from 'react-redux';
import { changeMainFilterText } from '../../../store/actions';

import './SearchInput.css';

class SearchInput extends React.Component {
  render() {
    const { mainFilterText, changeMainFilterText } = this.props;
    return (
      <input 
        className="search-input" 
        type='text' 
        placeholder="Name, address, company" 
        value={mainFilterText}
        onChange={(event) => {changeMainFilterText(event.target.value);
      }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mainFilterText: state.mainFilterText
  }
}

const mapDispatchToProps = {
  changeMainFilterText
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);