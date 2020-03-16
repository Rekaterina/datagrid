import React from 'react';
import { connect } from 'react-redux';
import SortingItem from './SortingItem';
import './Sorting.css';

class Sorting extends React.Component {
  render() {
    const sortingColumn = ['Name', 'Birth date', 'Location', 'Job position', 'Salary', 'Foreign language', 'Personal car', 'Rating' ];
    const sortingItems = sortingColumn.map((item, index) =>
    <SortingItem itemTitle={item} index={index} key={index} />
  );
    return (
      <div className="sorting-container">
        {sortingItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isTableVirtualization: state.isTableVirtualization
  }
}

export default connect(mapStateToProps)(Sorting);