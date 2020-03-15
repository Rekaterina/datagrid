import {
	ACTION_CHANGE_MAIN_FILTER_TEXT,
	ACTION_CHANGE_ROWS_DATA,
	ACTION_CHANGE_NAME_FILTER_TEXT,
	ACTION_CHANGE_LOCATION_FILTER_TEXT,
	ACTION_CHANGE_CHECKBOX_YES,
	ACTION_CHANGE_CHECKBOX_NO,
	ACTION_CHANGE_SELECTED_LANGUAGES,
	ACTION_CHANGE_SELECTED_RATING,
	ACTION_CHANGE_CHECKBOX_VIRTUALIZATION,
	ACTION_CHANGE_SORT_INDICATOR
	
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

const changeLocationFilterText = (newLocationFilterText) => {
	return {
		type: ACTION_CHANGE_LOCATION_FILTER_TEXT,
		payload: newLocationFilterText
	}
}

const changeRowsData = (newRowsData) => {
	return {
		type: ACTION_CHANGE_ROWS_DATA,
		payload: newRowsData
	}
}

const changeCheckboxYes = (boolean) => {
	return {
		type: ACTION_CHANGE_CHECKBOX_YES,
		payload: boolean
	}
}

const changeCheckboxNo = (boolean) => {
	return {
		type: ACTION_CHANGE_CHECKBOX_NO,
		payload: boolean
	}
}

const changeCheckboxTableVirtualization = (boolean) => {
	return {
		type: ACTION_CHANGE_CHECKBOX_VIRTUALIZATION,
		payload: boolean
	}
}

const changeSelectedLanguages = (lang) => {
	return {
		type: ACTION_CHANGE_SELECTED_LANGUAGES,
		payload: lang
	}
}

const changeSelectedRating = (rating) => {
	return {
		type: ACTION_CHANGE_SELECTED_RATING,
		payload: rating
	}
}

const changeSortIndicator = (boolen) => {
	return {
		type: ACTION_CHANGE_SORT_INDICATOR,
		payload: boolen
	}
}

export {
	changeMainFilterText,
	changeRowsData,
	changeNameFilterText,
	changeLocationFilterText,
	changeCheckboxYes,
	changeCheckboxNo,
	changeSelectedLanguages,
	changeSelectedRating,
	changeCheckboxTableVirtualization,
	changeSortIndicator
}