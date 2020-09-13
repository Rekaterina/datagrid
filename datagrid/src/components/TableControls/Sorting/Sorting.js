import React from 'react';
import { connect } from 'react-redux';
import {
  changeSortName
} from '../../../store/actions';

import './Sorting.css';

class Sorting extends React.Component {
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
    const { changeSortName } = this.props;
    changeSortName(this.state.isSorting);
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
    const { isSorting } = this.state;
    return (
      <div className="sorting-item-container">
        <span className="sorting-item-title">Name</span>
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
    sortName: state.sortName
  }
}

const mapDispatchToProps = {
  changeSortName
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);