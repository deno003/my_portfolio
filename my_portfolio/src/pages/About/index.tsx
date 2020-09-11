import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  ground: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  content: {
    position: 'relative',
    padding: theme.spacing(4),
    paddingTop: 2,
    paddingBottom: 2,
  },
}));

function About(props: any) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.ground}>
      <Grid container>
        <Grid item md={6}>
          <div className={classes.content}>
            <Typography component="h1" variant="h5" color="inherit">
              About
            </Typography>
            <Divider />
            <Typography variant="h6" color="inherit" paragraph>
              {post.text.split('\n').map((t: any, i: any) => {
                return <div key={i}>{t}</div>;
              })}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

About.propTypes = {
  post: PropTypes.object,
};

export default About;
