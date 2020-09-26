import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

// contexts
import { AboutContext } from 'App';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    position: 'relative',
    padding: theme.spacing(4),
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(2),
  },
}));

function About() {
  const classes = useStyles();
  const contents = useContext(AboutContext);

  return (
    <Paper className={classes.root} id="about">
      <Grid container>
        <Grid item md={12}>
          <div className={classes.subtitle}>
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
              <Typography variant="h6" color="inherit" key={key} gutterBottom>
                {item.title}

                {item.text.split('\n').map((key: any) => {
                  return (
                    <Typography variant="body1" color="inherit" key={key}>
                      - {key}
                    </Typography>
                  );
                })}
              </Typography>
            ))}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default About;
