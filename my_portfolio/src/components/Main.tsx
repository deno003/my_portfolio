import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// import styled from 'styled-components';

// components
import Home from 'components/pages/Home/index';
import About from 'components/pages/About/index';
import Skills from 'components/pages/Skills/index';
import Social from 'components/pages/Social/index';
import Works from 'components/pages/Works/index';
import NavTabs from 'components/NabTabs'

// styles
const useStyles = makeStyles((theme:Theme) => ({
  Main: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "black"
  },
  TabPanel:{
    
  },
  LinkTab:{
    color:"white"
  }
}));



const Main:React.FC = (Props:any) => {
  const classes = useStyles(Props);
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue:number) =>{
//     setValue(newValue);
//   }

  return (
    <div>
      <div className={classes.Main}>
        <Home />
        <NavTabs />
        <About />
        <Skills />
        <Works />
        <Social />
        </div>
    </div>
  );
}

export default Main;
