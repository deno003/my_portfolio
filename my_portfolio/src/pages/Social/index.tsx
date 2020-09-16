import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import TwitterIcon from '@material-ui/icons/Twitter';

// contexts
import { SocialContext } from 'App';

const useStyles = makeStyles((theme: Theme) => ({
  ground: {
    position: 'relative',
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  content: {
    position: 'relative',
    padding: theme.spacing(4),
  },
  divider: {
    backgroundColor: theme.palette.grey[100],
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

function Social() {
  const classes = useStyles();
  const contents = useContext(SocialContext);

  return (
    <Paper className={classes.ground}>
      <Grid container>
        <Grid item md={12}>
          <div className={classes.content}>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              align="center"
            >
              Social
            </Typography>
            <Divider className={classes.divider} />
            {contents.map((item, key) => (
              <p>{item.media}</p>
            ))}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Social;
