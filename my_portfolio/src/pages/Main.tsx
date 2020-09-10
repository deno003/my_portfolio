import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// import styled from 'styled-components';

// components
import Home from 'pages/Home/index';
import About from 'pages/About/index';
import Skills from 'pages/Skills/index';
import Social from 'pages/Social/index';
import Works from 'pages/Works/index';
import NavTabs from 'components/NavTabs';

// import homeContent from 'contents/homeContent.json';
const homeContent = {
  title: "Deno's Portfolio",
  description: "Hello, I'm Deno",
  image: 'https://source.unsplash.com/random',
  imgText: "Hello, I'm Deno",
};

// styles
const useStyles = makeStyles((theme: Theme) => ({
  Main: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'black',
  },
  TabPanel: {},
  LinkTab: {
    color: 'white',
  },
}));

function Main(Props: any) {
  const classes = useStyles(Props);

  return (
    <div className={classes.Main}>
      <main>
        <Home post={homeContent} />
        <NavTabs />
        <About />
        <Skills />
        <Works />
        <Social />
      </main>
    </div>
  );
}

export default Main;
