import { ACTION_CHANGE_MAIN_FILTER_TEXT, ACTION_CHANGE_ROWS_DATA } from './actionConstants';

const changeMainFilterText = (newMainFilterText) => {
	return {
		type: ACTION_CHANGE_MAIN_FILTER_TEXT,
		payload: newMainFilterText
	}
}

const changeRowsData = (newRowsData) => {
	return {
		type: ACTION_CHANGE_ROWS_DATA,
		payload: newRowsData
	}
} 

export { 
  changeMainFilterText, changeRowsData
}