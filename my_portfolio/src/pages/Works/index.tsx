import React, { useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// component
import WorksComponent from 'components/WorksComponent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// contexts
import { WorksContext } from 'App';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(4),
  },
}));

function Works() {
  const contents = useContext(WorksContext);
  const classes = useStyle();

  return (
    <Paper className={classes.root} id="works">
      <Grid container>
        <Grid item md={12}>
          <div className={classes.content}>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              align="center"
            >
              Works
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={3} justify="center" alignItems="center">
              {contents.map((item, key) => (
                <Grid item key={key} xs={12} sm={6} md={3}>
                  <WorksComponent item={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Works;
