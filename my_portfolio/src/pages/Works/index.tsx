import React, { useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// component
import Card from 'components/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// contexts
import { WorksContext } from 'App';

const useStyle = makeStyles((theme:Theme) =>({
  ground: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
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
}));

function Works() {
  const contents = useContext(WorksContext);
  const classes = useStyle();

  return (
    <Paper className={classes.ground}>
      <p>Works</p>
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
      </Paper>
  );
}

export default Works;
