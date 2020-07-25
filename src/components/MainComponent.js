import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchContent from './SearchContent';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 'auto',
        margin: 29
    },
}));

function SearchList(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <SearchContent />
        </div>
    );
}

export default SearchList;
