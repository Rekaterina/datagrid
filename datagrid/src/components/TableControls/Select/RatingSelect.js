import React from 'react';
import { connect } from 'react-redux';
import { changeSelectedRating } from '../../../store/actions';
import MultiSelect from "react-multiselect-with-checkbox";

import './Select.css';

class RatingSelect extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
    this.props.changeSelectedRating(this.state.selectedOption),
    )
  };

  render() {
    const options = [
      { value: 1, label: "☆" },
      { value: 2, label: "☆☆" },
      { value: 3, label: "☆☆☆" },
      { value: 4, label: "☆☆☆☆" },
      { value: 5, label: "☆☆☆☆☆" },
    ];
    const { selectedOption } = this.state;
    return (
      <div className='filter-container'>
      <p className='filter-title'>Rating</p>
      <MultiSelect
        className='rating-select'
        options={options}
        value={selectedOption}
        onChange={this.handleChange}
      />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rating: state.rating
  }
}

const mapDispatchToProps = {
  changeSelectedRating
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingSelect);