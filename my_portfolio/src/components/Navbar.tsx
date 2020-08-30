import * as React from 'react';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import {
//   withStyles,
//   Theme,
//   WithStyles,
//   createStyles,
// } from '@material-ui/core/styles';

import styled from 'styled-components';

interface iprops {
  // drawToggleClickHandler(): void;
}

class Navbar extends React.Component<iprops, {}> {
  constructor(props: iprops) {
    super(props);
  }

  public render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <MenuIconWrapper onClick={this.clickHandler}>
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

  private clickHandler = () => {
    // this.props.drawToggleClickHandler();
  };
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

export default Navbar;
