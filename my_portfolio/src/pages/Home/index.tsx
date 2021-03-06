import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    backgroundImage: 'url(images/home.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backdropFilter: 'blur(4px)',
  },
  backgroundImage: {
    filter: 'blur(2px)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  typography: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

function Home(props: any) {
  const classes = useStyles(props);
  const { post } = props;

  return (
    <Paper className={classes.root} id="home">
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.typography}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit">
              {post.description.split('\n').map((t: any, i: any) => {
                return <div key={i}>{t}</div>;
              })}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Home.propTypes = {
  post: PropTypes.object,
};

export default Home;
