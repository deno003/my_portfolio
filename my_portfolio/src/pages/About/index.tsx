import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

// contexts
import { AboutContext } from 'App';

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
  },
  divider: {
    color: theme.palette.common.white,
  },
}));

function About() {
  const classes = useStyles();
  const contents = useContext(AboutContext);

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
              About Me
            </Typography>
            <Divider className={classes.divider} />
            {contents.map((item, key) => (
              <Typography variant="h6" color="inherit" paragraph>
                {item.title}
                <Typography variant="body1" color="inherit" paragraph>
                  {item.text.split('\n').map((key: any, item: any) => {
                    return <div key={item}>- {key}</div>;
                  })}
                </Typography>
              </Typography>
            ))}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default About;
