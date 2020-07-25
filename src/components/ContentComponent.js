import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MovieItemComponents from './MovieItemComponents';
import { getMovieList } from '../actions';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    searchBox: {
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    }
});


class ContentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            year: '',
            index: 0,
            limit: 2,
            range: 2
        }
        this.search = this.search.bind(this);
        this.onChange = this.onChange.bind(this);
        this.changePage = this.changePage.bind(this);
        this.clearTab = this.clearTab.bind(this);
    }


    changePage(e, page) {
        console.log(e, page);
        let { range } = this.state;
        this.setState({
            index: (range * page) - range,
            limit: range * page
        })
    }

    onChange(e) {
        let value = e.target.value;
        let key = e.target.id;
        this.setState({
            [key]: value
        })
    }

    search(e) {

        let { name, year } = this.state;
        if ((name.trim().length != 0 && name.trim() != '') || (year.trim().length != 0 && year.trim() != '')) {
            this.props.getMovieList({ q: name.trim(), y: year.trim() });
        }
    }

    clearTab() {
        this.props.clearMovieList();
    }


    render() {
        const { classes, paginationRequired, items } = this.props;
        console.log(this.props);
        let { name, index, limit, range, year } = this.state;
        return (
            <div className={classes.root} >
                <div>
                    <div className={classes.searchBox}>
                        <TextField
                            id="name"
                            label="Movie Name"
                            style={{ margin: 8 }}
                            placeholder="Enter Movie Name"
                            margin="normal"
                            value={name}
                            onChange={this.onChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button variant="contained" color="primary" onClick={this.search}>  Search </Button>
                        <Button variant="contained" color="primary" onClick={this.clearTab}> Clear </Button>
                    </div>
                    <MovieItemComponents items={!!items.Search ? (paginationRequired ? items.Search.slice(index, limit) : items.Search) : []} error={items.Error || null} />
                    {!!paginationRequired && !!items.Search && items.Search.length > 0 &&
                        < Pagination count={Math.ceil(items.Search.length / range)} variant="outlined" shape="rounded" onChange={this.changePage} />
                    }
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ContentComponent);
