import * as React from 'react';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import styled from 'styled-components';

const useStyles = makeStyles((theme:Theme) => ({
  AppBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "black"
  },
}));

const Navbar:React.FC = (Props:any) => {
  const classes = useStyles(Props);

  const clickHandler = () => {
    // this.props.drawToggleClickHandler();
  };

  return (
    <div>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <MenuIconWrapper onClick={clickHandler}>
            <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
              <MdMenu />
            </IconContext.Provider>
          </MenuIconWrapper>
          <TitleWrapper to="/">Deno_etml Portfolio</TitleWrapper>
          <GrowWrapper />
          <NavigationItemsWrapper>
            <LinkWrapper to="/about">About</LinkWrapper>
            <LinkWrapper to="/skills">Skills</LinkWrapper>
            <LinkWrapper to="/works">Works</LinkWrapper>
            <LinkWrapper to="/social">Social</LinkWrapper>
          </NavigationItemsWrapper>
        </Toolbar>
      </AppBar>
    </div>
  );
}


const MenuIconWrapper = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const GrowWrapper = styled.div`
  flex: 1;
`;

const TitleWrapper = styled(Link)`
  color: white;
  font-size: 1.5rem;
  padding: 0 1rem;
  text-decoration: none;
  @media (min-width: 769px) {
    padding: 0 0rem;
  }
`;

const NavigationItemsWrapper = styled.div`
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  @media (max-width: 769px) {
    display: none;
  }
`;

const LinkWrapper = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 16px 1rem;
`;

export default withRouter(Navbar);
