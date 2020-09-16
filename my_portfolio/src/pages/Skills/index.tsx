import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { SkillsContext } from 'App';
import SkillsComponent from 'components/SkillsComponent';

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
    marginBottom: theme.spacing(2),
  },
  cardGrid: {
    padding: '0 16px',
  },
  container: {
    maxWidth: '1200px',
  },
}));

function Skills() {
  const classes = useStyles();
  const contents = useContext(SkillsContext).sort(
    (a: any, b: any) => b.level - a.level,
  );

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
              Skills
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
                  <SkillsComponent item={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Skills;
