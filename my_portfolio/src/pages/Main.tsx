import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// components
import Home from 'pages/Home/index';
import About from 'pages/About/index';
import Skills from 'pages/Skills/index';
import Social from 'pages/Social/index';
import Works from 'pages/Works/index';
import NavLink from 'components/NavLink';

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
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'black',
  },
}));

function Main(Props: any) {
  const classes = useStyles(Props);

  return (
    <Container maxWidth="lg" className={classes.Main}>
      <main>
        <Home post={homeContent} />
        <NavLink />
        <About />
        <Skills />
        <Works />
        <Social />
      </main>
    </Container>
  );
}

export default Main;
