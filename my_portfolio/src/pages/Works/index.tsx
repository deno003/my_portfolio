import React, { useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// component
import Card from 'components/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// contexts
import { WorksContext } from 'App';

const useStyle = makeStyles((theme: Theme) => ({
  ground: {
    position: 'relative',
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '5vh auto',
  },
  cardGrid: {
    padding: '0 16px',
  },
  divider: {
    backgroundColor: theme.palette.grey[100],
    marginBottom: theme.spacing(2),
  },
  content: {
    position: 'relative',
    padding: theme.spacing(4),
  },
}));

function Works() {
  const contents = useContext(WorksContext);
  const classes = useStyle();

  return (
    <Paper className={classes.ground} id="works">
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
            <Grid
              container
              className={classes.container}
              spacing={3}
              alignItems="center"
            >
              {contents.map((item, key) => (
                <Grid
                  item
                  className={classes.cardGrid}
                  key={key}
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Card item={item} />
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
