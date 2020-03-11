import {
	ACTION_CHANGE_MAIN_FILTER_TEXT,
	ACTION_CHANGE_ROWS_DATA,
	ACTION_CHANGE_NAME_FILTER_TEXT,
	ACTION_CHANGE_INPUT_VISIBILITY
	
} from './actionConstants';

const changeMainFilterText = (newMainFilterText) => {
	return {
		type: ACTION_CHANGE_MAIN_FILTER_TEXT,
		payload: newMainFilterText
	}
}

const changeNameFilterText = (newNameFilterText) => {
	return {
		type: ACTION_CHANGE_NAME_FILTER_TEXT,
		payload: newNameFilterText
	}
}

const changeRowsData = (newRowsData) => {
	return {
		type: ACTION_CHANGE_ROWS_DATA,
		payload: newRowsData
	}
}

const changeInputVisibility = (boolean) => {
	return {
		type: ACTION_CHANGE_INPUT_VISIBILITY,
		payload: boolean
	}
}

export {
	changeMainFilterText,
	changeRowsData,
	changeNameFilterText,
	changeInputVisibility
}