import React from 'react';
import { connect } from 'react-redux';
import {
  changeNameFilterText,
  changeInputVisibility
} from '../../../../store/actions';

import './NameTitle.css';

class NameTitle extends React.Component {
  onClickHandler() {
    const { changeInputVisibility, isVisibleInput } = this.props;
    const searchNameInput = document.querySelector('.search-name-input');
    searchNameInput.classList.toggle('hidden');
    changeInputVisibility(!isVisibleInput);
  }

  render() {
    const { nameFilterText, changeNameFilterText, isVisibleInput } = this.props;
    return (
      <div className="table-head-cell table-head-name">Name
        <i
          className="fas fa-search"
          onClick={this.onClickHandler.bind(this)}
        >
        </i>
        <input
          autoFocus
          className={isVisibleInput ? 'search-name-input' : 'search-name-input hidden'}
          type='text'
          placeholder="Search name"
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
    nameFilterText: state.nameFilterText,
    isVisibleInput: state.isVisibleInput
  }
}

const mapDispatchToProps = {
  changeNameFilterText,
  changeInputVisibility
};

export default connect(mapStateToProps, mapDispatchToProps)(NameTitle);