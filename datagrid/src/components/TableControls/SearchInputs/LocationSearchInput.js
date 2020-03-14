import React from 'react';
import { connect } from 'react-redux';
import { changeLocationFilterText } from '../../../store/actions';

import './SearchInputs.css';

class LocationSearchInput extends React.Component {
  render() {
    const { locationFilterText, changeLocationFilterText } = this.props;
    return (
      <div className='filter-container'>
        <p className='filter-title'>Location</p>
        <input
          className='search-input'
          type='text'
          placeholder='Search...'
          value={locationFilterText}
          onChange={(event) => {
            changeLocationFilterText(event.target.value);
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locationFilterText: state.locationFilterText
  }
}

const mapDispatchToProps = {
  changeLocationFilterText
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearchInput);