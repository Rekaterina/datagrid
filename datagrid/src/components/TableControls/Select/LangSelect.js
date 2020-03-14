import React from 'react';
import { connect } from 'react-redux';
import { changeSelectedLanguages } from '../../../store/actions';
import MultiSelect from "react-multiselect-with-checkbox";

import './Select.css';

class LangSelect extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
    this.props.changeSelectedLanguages(this.state.selectedOption),
    )
  };

  render() {
    const options = [
      { value: "Chinese", label: "Chinese" },
      { value: "Italian", label: "Italian" },
      { value: "French", label: "French" },
      { value: "Russian", label: "Russian" },
      { value: "Japanese", label: "Japanese" },
    ];
    const { selectedOption } = this.state;
    return (
      <div className='filter-container'>
      <p className='filter-title'>Foreign language</p>
      <MultiSelect
        className='lang-select'
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
    languages: state.languages
  }
}

const mapDispatchToProps = {
  changeSelectedLanguages
};

export default connect(mapStateToProps, mapDispatchToProps)(LangSelect);