import React from 'react';
import { connect } from 'react-redux';
import CsvDownloader from 'react-csv-downloader';
import './ExportButton.css';

class ExportButton extends React.Component {
  render() {
    const columns = [
      { displayName: 'id', id: 'id' },
      { displayName: 'Name', id: 'name' },
      { displayName: 'Birth Date', id: 'birthDate' },
      { displayName: 'Location', id: 'location' },
      { displayName: 'Job Position', id: 'job' },
      { displayName: 'Salary', id: 'salary' },
      { displayName: 'Language', id: 'lang' },
      { displayName: 'Personal Car', id: 'isPersonalCar' },
      { displayName: 'Rating', id: 'rating' },
    ];

    return (
      <div className="download-button-container">
        <CsvDownloader
          filename="myfile"
          separator=";"
          wrapColumnChar="'"
          text="Download CSV"
          columns={columns}
          datas={this.props.rowsData} />
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    rowsData: state.rowsData,
  }
}

export default connect(mapStateToProps)(ExportButton);