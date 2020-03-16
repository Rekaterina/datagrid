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
	ACTION_CHANGE_SORT_LOCATION,
	ACTION_CHANGE_SORT_NAME
} from './actionConstants';
import data from "../data/data";

const defaultState = {
	rowsData: data,
	mainFilterText: '',
	nameFilterText: '',
	locationFilterText: '',
	isVisibleNameInput: false,
	isVisibleLocationInput: false,
	isCarYes: true,
	isCarNo: true,
	isTableVirtualization: true,
	languages: [],
	rating: [],
	sortName: 'no',
	sortLocation: 'no',
}

const rootReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTION_CHANGE_MAIN_FILTER_TEXT:
			return { ...state, mainFilterText: action.payload };
		case ACTION_CHANGE_ROWS_DATA:
			return { ...state, rowsData: action.payload };
		case ACTION_CHANGE_NAME_FILTER_TEXT:
			return { ...state, nameFilterText: action.payload };
		case ACTION_CHANGE_LOCATION_FILTER_TEXT:
			return { ...state, locationFilterText: action.payload };
		case ACTION_CHANGE_CHECKBOX_YES:
			return { ...state, isCarYes: action.payload };
		case ACTION_CHANGE_CHECKBOX_NO:
			return { ...state, isCarNo: action.payload };
		case ACTION_CHANGE_CHECKBOX_VIRTUALIZATION:
			return { ...state, isTableVirtualization: action.payload };
		case ACTION_CHANGE_SELECTED_LANGUAGES:
			return { ...state, languages: action.payload };
		case ACTION_CHANGE_SELECTED_RATING:
			return { ...state, rating: action.payload };
		case ACTION_CHANGE_SORT_LOCATION:
			return { ...state, sortLocation: action.payload };
		case ACTION_CHANGE_SORT_NAME:
			return { ...state, sortName: action.payload };
		default:
			return state;
	}
}

export default rootReducer;