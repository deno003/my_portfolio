import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { animateScroll } from 'react-scroll';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
  container: {},
  button: {
    color: theme.palette.primary.dark,
  },
}));

function Footer(Props: any) {
  const classes = useStyles(Props);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Button className={classes.button} onClick={scrollToTop}>
            BACK TO TOP
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="p"
            variant="caption"
            color="inherit"
            align="center"
          >
            Copyright © 2020 Deno003 All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
