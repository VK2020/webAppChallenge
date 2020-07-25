import React from 'react';
import { connect } from "react-redux";
import { getMovieList1, clearMovieList } from '../actions';
import ContentComponent from './ContentComponent';

function Content(props) {
    return (
        <div>
            <ContentComponent getMovieList={props.getMovieList} items={props.items} paginationRequired={true} clearMovieList={props.clearMovieList} />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList1(payload)),
        clearMovieList: () => dispatch(clearMovieList('tab1')),
    };
}


const mapStateToProps = state => {
    return { page: state.page, items: state.tab1Items };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

