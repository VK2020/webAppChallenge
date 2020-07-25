import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { getMovieDetails, clearMovieDetails } from '../actions';
import MovieDetail from './MovieDetail';

const styles = theme => ({
    root: {
        display: 'flex',
        margin: 15
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    gridStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: 400
        }
    }
});

function MovieItemList(props) {
    const { classes, items, error } = props;
    const [open, setOpen] = React.useState(false);
    const [showMovieDetails, openMovieDetailsDialog] = React.useState(false);

    const showMoreInfo = (item) => {
        props.getMovieDetails(item.imdbID);
        openMovieDetailsDialog(true);
    };

    const handleClose = () => {
        props.clearMovieDetails();
        openMovieDetailsDialog(false);
    };

    return (
        <div>
            {
                !!error && <div>{error}</div>
            }
            {
                !!items &&

                <div className={classes.gridStyle}>
                    <>
                        {
                            (items).map((movie) => (
                                <Card className={classes.root}>
                                    <CardMedia
                                        className={classes.cover}
                                        image={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnot%2Bavailable&psig=AOvVaw3rPH5iHKMECEvBnWeAY9v8&ust=1592154596848000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKji_Juk_-kCFQAAAAAdAAAAABAD'}
                                        title="Live from space album cover"
                                    />
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography component="h5" variant="h5">
                                                Title: {movie.Title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                Type: {movie.Type}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                Year: {movie.Year}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                IMDB ID: {movie.imdbID}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small"variant="contained" color="primary"  onClick={() => showMoreInfo(movie)}>Show More Info</Button>
                                        </CardActions>
                                    </div>
                                </Card>
                            ))
                        }
                        {showMovieDetails &&
                            <MovieDetail showMovieDetails={showMovieDetails} handleClose={handleClose} />
                        }
                    </>
                </div>
            }

        </div >
    );
}


const mapDispatchToProps = dispatch => {
    return {
        getMovieDetails: payload => dispatch(getMovieDetails(payload)),
        clearMovieDetails: () => dispatch(clearMovieDetails()),
    };
}

const MovieItemComponents = connect(null, mapDispatchToProps)(MovieItemList);
export default withStyles(styles)(MovieItemComponents);