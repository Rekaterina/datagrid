import React from 'react';
import { connect } from 'react-redux';
import {
  changeCheckboxTableVirtualization
} from '../../../store/actions';

import './CheckBoxTableVirtualization.css';

class CheckBoxTableVirtualization extends React.Component {
  render() {
    const { changeCheckboxTableVirtualization, isTableVirtualization } = this.props;
    return (
      <div className='checkbox-virtual-table-container'>
        <label className='checkbox-virtual-table-label' htmlFor='checkbox-virtual-table'>Virtualized table </label>
        <input
          defaultChecked={isTableVirtualization}
          className='checkbox-virtual-table'
          type='checkbox'
          onChange={() => {
            changeCheckboxTableVirtualization(!isTableVirtualization);
          }}
        />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isTableVirtualization: state.isTableVirtualization
  }
}

const mapDispatchToProps = {
  changeCheckboxTableVirtualization
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxTableVirtualization);