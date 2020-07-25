import {
	START_FETCHING, SET_PAGE, SET_MOVIE_LIST_TAB1, SET_MOVIE_LIST_TAB2, SET_MOVIE_DETAIL, CLEAR_MOVIE_DETAILS, CLEAR_MOVIE_LIST
} from './constants';

const initialState = {
	items: { Search: [], totalResults: 0 },
	page: 1,
	tab1Items: {},
	tab2Items: {},
	movieDetails: {},
	isLoading: false,
	q: '',
};
function rootReducer(state = initialState, action) {
	if (action.type === SET_MOVIE_LIST_TAB1) {
		return {
			...state,
			tab1Items: action.payload,
			isLoading: false
		};
	}

	if (action.type === SET_MOVIE_LIST_TAB2) {
		return {
			...state,
			tab2Items: action.payload,
			isLoading: false
		};
	}

	if (action.type === CLEAR_MOVIE_LIST) {
		if (action.payload === 'tab1') {
			return {
				...state,
				tab1Items: {},
				isLoading: false
			};
		} else if (action.payload === 'tab2') {
			return {
				...state,
				tab2Items: {},
				isLoading: false
			};
		}
	}

	if (action.type === SET_MOVIE_DETAIL) {
		return {
			...state,
			movieDetails: action.payload,
			isLoading: false
		};
	}

	if (action.type === CLEAR_MOVIE_DETAILS) {
		return {
			...state,
			movieDetails: {},
			isLoading: false
		};
	}

	if (action.type === START_FETCHING) {
		return {
			...state,
			isLoading: true
		};
	}

	if (action.type === SET_PAGE) {
		return {
			...state,
			page: action.payload
		};
	}

	return state;
}
export default rootReducer;