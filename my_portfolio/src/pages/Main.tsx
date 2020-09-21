import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// components
import Home from 'pages/Home/index';
import About from 'pages/About/index';
import Skills from 'pages/Skills/index';
import Social from 'pages/Social/index';
import Works from 'pages/Works/index';
import NavLink from 'components/NavLink';
import NabTabs from 'components/NavTabs';

// import homeContent from 'contents/homeContent.json';
const homeContent = {
  title: "Deno's Portfolio",
  description: "Hello, I'm Deno\nSoftware Developer",
  image: 'https://source.unsplash.com/random',
  imgText: "Hello, I'm Deno",
};

// styles
const useStyles = makeStyles((theme: Theme) => ({
  Main: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
}));

function Main(Props: any) {
  const classes = useStyles(Props);

  return (
    <div className={classes.Main}>
      <main>
        <Home post={homeContent} />
        <NavLink />
        <NabTabs />
        <About />
        <Skills />
        <Works />
        <Social />
      </main>
    </div>
  );
}

export default Main;
