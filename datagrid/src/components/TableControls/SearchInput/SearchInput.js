import React from 'react';
import { connect } from 'react-redux';
import { changeMainFilterText } from '../../../store/actions';

import './SearchInput.css';

class SearchInput extends React.Component {
  render() {
    const { mainFilterText, changeMainFilterText } = this.props;
    return (
      <input
        className="main-search-input"
        type='text'
        placeholder="Search name, location, job"
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