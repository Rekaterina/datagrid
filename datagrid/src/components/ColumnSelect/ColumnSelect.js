import React from 'react';
import { connect } from 'react-redux';
import { changeSelectedColumn } from '../../store/actions';
import MultiSelect from "react-multiselect-with-checkbox";

import './ColumnSelect.css';

class ColumnSelect extends React.Component {
  state = {
    selectedOption: [
      { value: "BirthDate", label: "Birth date" },
      { value: "Location", label: "Location" },
      { value: "JobPosition", label: "Job position" },
      { value: "Salary", label: "Salary" },
      { value: "ForeignLanguage", label: "Foreign language" },
      { value: "PersonalCar", label: "Personal car" },
      { value: "Rating", label: "Rating" },
    ],
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
    this.props.changeSelectedColumn(this.state.selectedOption),
    )
  };

  render() {
    const options = [
      { value: "BirthDate", label: "Birth date" },
      { value: "Location", label: "Location" },
      { value: "JobPosition", label: "Job position" },
      { value: "Salary", label: "Salary" },
      { value: "ForeignLanguage", label: "Foreign language" },
      { value: "PersonalCar", label: "Personal car" },
      { value: "Rating", label: "Rating" },
    ];
    const { selectedOption } = this.state;
    return (
      <div className='column-filter-container'>
      <p className='filter-title'>Сolumn visibility</p>
      <MultiSelect
        className='column-select'
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
    columns: state.columns
  }
}

const mapDispatchToProps = {
  changeSelectedColumn
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnSelect);