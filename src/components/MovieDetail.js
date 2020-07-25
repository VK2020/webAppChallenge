import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            flexGrow: 1
        }
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
      }
});

function MovieInfo(props) {
    const { showMovieDetails, handleClose, movieDetail, classes } = props;
    console.log(props);
    return (
        <div>
            <Dialog
                open={showMovieDetails}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={'md'}
                >  
                <DialogTitle  id="alert-dialog-title">{"Movie Details"}</DialogTitle>
              <DialogActions >
                <IconButton  aria-label="close" className={classes.closeButton} onClick={handleClose} >
                <CloseIcon />
                </IconButton>
            </DialogActions>
                <DialogContent>
                    <div className={classes.root}>
                        <div>
                            <img src={movieDetail.Poster} className="img-fluid" alt="Poster Not Available" />
                        </div>
                        <div>
                        <Typography  variant="subtitle1" gutterBottom>
                                <b>IMDB Rating: </b>{movieDetail.imdbRating}
                            </Typography>
                        <Typography  variant="subtitle1" gutterBottom>
                                <b>Box-Office: </b>{movieDetail.imdbRating > 7 ? "Hit" : "Flop"}
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom>
                                <b>Title: </b>{movieDetail.Title}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Type: </b>{movieDetail.Type}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Language: </b>{movieDetail.Language}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Genre: </b>{movieDetail.Genre}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Year: </b>{movieDetail.Year}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Released On: </b>{movieDetail.Released}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Rated: </b>{movieDetail.Rated}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Director: </b>{movieDetail.Director}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Actors: </b>{movieDetail.Actors}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Awards: </b>{movieDetail.Awards}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>IMDB ID: </b>{movieDetail.imdbID}
                            </Typography>
                          
                            <Typography variant="subtitle1" gutterBottom>
                                <b>IMDB Votes: </b>{movieDetail.imdbVotes}
                            </Typography>
                          
                        </div>
                    </div>
                    <Typography variant="subtitle1" gutterBottom>
                        <b>Plot: </b>{movieDetail.Plot}
                    </Typography>
                </DialogContent>
             
            </Dialog>
        </div >
    );
}


const mapStateToProps = state => {
    return { movieDetail: state.movieDetails };
};


const MovieDetails = connect(mapStateToProps, null)(MovieInfo);
export default withStyles(styles)(MovieDetails);