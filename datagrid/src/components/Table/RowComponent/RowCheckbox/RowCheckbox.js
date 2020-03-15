import React from 'react';
import { connect } from 'react-redux';
import './RowCheckbox.css';
// import Checkbox from '@material/react-checkbox';
// import "@material/react-checkbox/dist/checkbox.css";

class RowCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      
    }
  }
  render() {
    return (
      <div className={this.props.index % 2 ? 'row-cell row-number odd' : 'row-cell row-number even'}>
        <input 
        type='checkbox'
        checked={this.state.checked}
        onChange={(e) => this.setState({
          checked: e.target.checked,
          
        })}
        ></input>
        {/* <Checkbox
          checked={this.state.checked}
         
          onChange={(e) => this.setState({
            checked: e.target.checked,
            
          })
          } /> */}
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    rowsData: state.rowsData,
  }
}

export default connect(mapStateToProps)(RowCheckbox);