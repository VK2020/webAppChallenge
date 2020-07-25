import {
    API_URL, API_KEY, API_KEY_QUERY_STRING,
    START_FETCHING, SET_PAGE, SET_MOVIE_LIST_TAB1, SET_MOVIE_LIST_TAB2, SET_MOVIE_DETAIL, CLEAR_MOVIE_DETAILS, CLEAR_MOVIE_LIST
} from './constants';

export function getMovieList1(payload) {
    return dispatch => {
        dispatch({ type: START_FETCHING });
        dispatch({ type: SET_PAGE, payload: payload.page });
        return fetch(`${API_URL}?${API_KEY_QUERY_STRING}=${API_KEY}&s=${payload.q}&y=${payload.y}&page=${payload.page}`)
            .then(result => result.json())
            .then(items => {
                dispatch({ type: SET_MOVIE_LIST_TAB1, payload: items });
            });
    };
};



export function getMovieList2(payload) {
    return dispatch => {
        dispatch({ type: START_FETCHING });
        dispatch({ type: SET_PAGE, payload: payload.page });
        return fetch(`${API_URL}?${API_KEY_QUERY_STRING}=${API_KEY}&s=${payload.q}&y=${payload.y}&page=${payload.page}`)
            .then(result => result.json())
            .then(items => {
                dispatch({ type: SET_MOVIE_LIST_TAB2, payload: items });
            });
    };
};

export function getMovieDetails(payload) {
    return dispatch => {
        dispatch({ type: START_FETCHING });
        return fetch(`${API_URL}?${API_KEY_QUERY_STRING}=${API_KEY}&i=${payload}&plot=full&r=json`)
            .then(result => result.json())
            .then(item => {
                dispatch({ type: SET_MOVIE_DETAIL, payload: item });
            });
    };
};



export function clearMovieDetails() {
    return dispatch => {
        dispatch({ type: CLEAR_MOVIE_DETAILS });
    };
};



export function clearMovieList(tab) {
    return dispatch => {
        dispatch({ type: CLEAR_MOVIE_LIST, payload: tab });
    };
};




