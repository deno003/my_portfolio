import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { SkillsContext } from 'App';
import SkillsComponent from 'components/SkillsComponent';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  content: {
    position: 'relative',
    padding: theme.spacing(4),
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(2),
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundPosition: 'center',
  },
}));

function Skills() {
  const classes = useStyles();
  const contents = useContext(SkillsContext).sort(
    (a: any, b: any) => b.level - a.level,
  );

  return (
    <Paper className={classes.root} id="skills">
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
              justify="center"
              alignItems="center"
            >
              {contents.map((item, key) => (
                <Grid item key={key} xs={12} sm={6} md={3}>
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
