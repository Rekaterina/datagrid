import React from 'react';
import { connect } from 'react-redux';
import {
  changeLocationFilterText
} from '../../../../store/actions';

import './Title.css';

class LocationTitle extends React.Component {
  render() {
    const divStyle = {
      position: 'relative',
      left: '0px',
      zIndex: '1',
    };
    return (
      <div className="table-head-cell table-head-location" style={divStyle}>Location
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locationFilterText: state.locationFilterText
  }
}

const mapDispatchToProps = {
  changeLocationFilterText
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationTitle);