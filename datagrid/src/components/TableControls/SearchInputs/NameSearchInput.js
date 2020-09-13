import React from 'react';
import { connect } from 'react-redux';
import { changeNameFilterText } from '../../../store/actions';

import './SearchInputs.css';

class NameSearchInputnput extends React.Component {
  render() {
    const { nameFilterText, changeNameFilterText } = this.props;
    return (
      <div className='filter-container'>
        <p className='filter-title'>Name</p>
        <input
          className='search-input'
          type='text'
          placeholder='Search...'
          value={nameFilterText}
          onChange={(event) => {
            changeNameFilterText(event.target.value);
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nameFilterText: state.nameFilterText
  }
}

const mapDispatchToProps = {
  changeNameFilterText
};

export default connect(mapStateToProps, mapDispatchToProps)(NameSearchInputnput);