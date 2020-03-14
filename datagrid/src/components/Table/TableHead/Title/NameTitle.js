import React from 'react';
import { connect } from 'react-redux';
import {
  changeNameFilterText
} from '../../../../store/actions';

import './Title.css';

class NameTitle extends React.Component {
  render() {
    const divStyle = {
      position: 'sticky',
      left: '68px',
      zIndex: '4',
    };
  
    return (
      <div className="table-head-cell table-head-name" style={divStyle}>Name
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

export default connect(mapStateToProps, mapDispatchToProps)(NameTitle);