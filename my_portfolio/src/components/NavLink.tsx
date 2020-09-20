import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-scroll';
import Grid from '@material-ui/core/Grid';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  AppBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.common.black,
    flexGrow: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundPosition: 'center',
  },
  link: {
    margin: theme.spacing(2),
    color: theme.palette.text.primary,
  },
}));

const sections = [
  { title: 'About', url: 'about' },
  { title: 'Skills', url: 'skills' },
  { title: 'Works', url: 'works' },
  { title: 'Social', url: 'social' },
];

function NavLink(Props: any) {
  const classes = useStyles(Props);

  return (
    <div>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          <Grid container className={classes.linkContainer}>
            {sections.map((section) => (
              <Grid item className={classes.link}>
                <Link
                  activeClass="active"
                  to={section.url}
                  spy={true}
                  smooth={true}
                  duration={800}
                  className={classes.toolbarLink}
                >
                  {section.title}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavLink;
