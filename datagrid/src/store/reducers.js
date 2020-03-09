import { ACTION_CHANGE_MAIN_FILTER_TEXT, ACTION_CHANGE_ROWS_DATA } from './actionConstants';

const defaultState = {
  rowsData: [],
  mainFilterText: ''
}

const rootReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTION_CHANGE_MAIN_FILTER_TEXT:
      return { ...state, mainFilterText: action.payload };
    case ACTION_CHANGE_ROWS_DATA:
			return { ...state, rowsData: action.payload };
		default:
			return state;
	}
}

export default rootReducer;