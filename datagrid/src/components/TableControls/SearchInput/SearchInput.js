import React from 'react';
import { connect } from 'react-redux';
import { changeMainFilterText } from '../../../store/actions';

import './SearchInput.css';

class SearchInput extends React.Component {
  render() {
    const { mainFilterText, changeMainFilterText } = this.props;
    return (
      <div className='main-search-input-container'>
        <label className='label main-search-input-label' htmlFor='main-search-input'>Name, location, job</label>
        <input
          className='main-search-input'
          type='text'
          placeholder='Search'
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);