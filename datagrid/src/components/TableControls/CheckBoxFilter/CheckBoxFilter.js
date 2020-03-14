import React from 'react';
import { connect } from 'react-redux';
import {
  changeCheckboxYes,
  changeCheckboxNo
} from '../../../store/actions';

import './CheckBoxFilter.css';

class CheckBoxFilter extends React.Component {
  render() {
    const { isCarYes, isCarNo, changeCheckboxYes, changeCheckboxNo } = this.props;
    return (
      <div className='filter-container'>
        <p className='filter-title'>Personal car</p>
        <div className='checkboxes'>
          <label className='checkbox-filter-label' htmlFor='checkbox-filter'>Yes</label>
          <input
            defaultChecked={isCarYes}
            className='checkbox-filter checkbox-filter-yes'
            type='checkbox'
            onChange={() => {
              changeCheckboxYes(!isCarYes);
            }}
          />
          <label className='checkbox-filter-label' htmlFor='checkbox-filter'>No</label>
          <input
            defaultChecked={isCarNo}
            className='checkbox-filter checkbox-filter-no'
            type='checkbox'
            onChange={() => {
              changeCheckboxNo(!isCarNo);
            }}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isCarYes: state.isCarYes,
    isCarNo: state.isCarNo
  }
}

const mapDispatchToProps = {
  changeCheckboxYes,
  changeCheckboxNo
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxFilter);