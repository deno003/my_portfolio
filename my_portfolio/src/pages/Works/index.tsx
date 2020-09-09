import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// component
import Card from 'components/Card';
import Grid from '@material-ui/core/Grid';

// contexts
import { WorksContext } from 'App';

const useStyle = makeStyles({
  container: {
    maxWidth: '1200px',
    margin: '5vh auto',
  },
  cardGrid: {
    padding: '0 16px',
  },
});

function Works() {
  const contents = useContext(WorksContext);
  const classes = useStyle();

  return (
    <div>
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
    </div>
  );
}

export default Works;
