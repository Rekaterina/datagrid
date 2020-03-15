import React from 'react';
import { connect } from 'react-redux';
import {
  changeSortIndicator
} from '../../../../store/actions';
import './SortIndicator.css';

class SortIndicator extends React.Component {
   state = {
      isUp: false,
      isDown: false
   }

  onClickHandler() {
    const { changeSortIndicator, sortingIndicator } = this.props;
    if (!this.state.isUp && !this.state.isDown) {
      this.setState(() => ({
        isUp: true
      }));
      changeSortIndicator(!sortingIndicator);
    console.log('isUp');
    }

    if (this.state.isUp) {
      this.setState(() => ({
        isUp: false,
        isDown: true
      }));
      changeSortIndicator(!sortingIndicator);
    console.log('isDown');
    }

    if (this.state.isDown) {
      this.setState(() => ({
        isUp: false,
        isDown: false
      }));
      changeSortIndicator(!sortingIndicator);
    console.log('No sort');
    }
  }

  render() {
    const { isDown, isUp } = this.state;
    return (
      <div className='sort-indicator' onClick={this.onClickHandler.bind(this)}>
        <div className={isUp ? 'up up-active' : 'up'}></div>
        <div className={isDown ? 'down down-active' : 'down'}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sortingIndicator: state.sortingIndicator,
  }
}


const mapDispatchToProps = {
  changeSortIndicator
};

export default connect(mapStateToProps, mapDispatchToProps)(SortIndicator);