import React from 'react';
import { connect } from 'react-redux';
import {
  changeSortName,
  changeSortLocation
} from '../../../store/actions';

import './Sorting.css';

class SortingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorting: 'no'
    }
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      this.setSortingState();
    }
  }

  setSortingState() {
    const { index, changeSortName, changeSortLocation } = this.props;

    if (index === 0) {
      console.log('0');
      changeSortName(this.state.isSorting);
    }

    if (index === 2) {
      changeSortLocation(this.state.isSorting);
    }
  }

  onClickHandlerNo() {
    if (this.state.isSorting !== 'no') {
      this.setState(() => ({
        isSorting: 'no'
      }));
    }
  }

  onClickHandlerUp() {
    if (this.state.isSorting !== 'up') {
      this.setState(() => ({
        isSorting: 'up'
      }));
    }
  }

  onClickHandlerDown() {
    if (this.state.isSorting !== 'down') {
      this.setState(() => ({
        isSorting: 'down'
      }));
    }
  }

  render() {
    const { itemTitle } = this.props;
    const { isSorting } = this.state;
    return (
      <div className="sorting-item-container">
        <span className="sorting-item-title">{itemTitle}</span>
        <div className={isSorting === 'no' ? 'no sorting-btn active' : 'no sorting-btn'}
          onClick={this.onClickHandlerNo.bind(this)}>&#10006;</div>
        <div className={isSorting === 'up' ? 'up sorting-btn active' : 'up sorting-btn'}
          onClick={this.onClickHandlerUp.bind(this)}>&#11014;</div>
        <div className={isSorting === 'down' ? 'down sorting-btn active' : 'down sorting-btn'}
          onClick={this.onClickHandlerDown.bind(this)}>&#11015;</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sortName: state.sortName,
    sortLocation: state.sortLocation
  }
}

const mapDispatchToProps = {
  changeSortName,
  changeSortLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingItem);