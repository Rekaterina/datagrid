import React from 'react';
import { connect } from 'react-redux';
import { changeMainFilterText } from '../../../store/actions';

import './SearchInputs.css';

class AllFieldsSearchInput extends React.Component {
  render() {
    const { mainFilterText, changeMainFilterText } = this.props;
    return (
      <div className='filter-container'>
        <p className='filter-title'>All fields</p>
        <input
          className='search-input'
          type='text'
          placeholder='Search...'
          value={mainFilterText}
          onChange={(event) => {
            changeMainFilterText(event.target.value);
          }}
        />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllFieldsSearchInput);