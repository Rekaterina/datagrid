import {
	ACTION_CHANGE_MAIN_FILTER_TEXT,
	ACTION_CHANGE_ROWS_DATA,
	ACTION_CHANGE_NAME_FILTER_TEXT,
	ACTION_CHANGE_INPUT_VISIBILITY
} from './actionConstants';
import data from "../data/data";

const defaultState = {
	rowsData: data,
	mainFilterText: '',
	nameFilterText: '',
	isVisibleInput: false
}

const rootReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTION_CHANGE_MAIN_FILTER_TEXT:
			return { ...state, mainFilterText: action.payload };
		case ACTION_CHANGE_ROWS_DATA:
			return { ...state, rowsData: action.payload };
		case ACTION_CHANGE_NAME_FILTER_TEXT:
			return { ...state, nameFilterText: action.payload };
			case ACTION_CHANGE_INPUT_VISIBILITY:
			return { ...state, isVisibleInput: action.payload };
		default:
			return state;
	}
}

export default rootReducer;