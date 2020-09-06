import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';

// material-ui
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import styled from 'styled-components';

// components
import Home from './pages/Home/index'

interface TabPanelProps {
  children?: React.ReactNode;
  index:any;
  value:any;
}

const TabPanel:React.FC<TabPanelProps> = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

type LinkTabProps = {
  label?: string;
  href?: string;
}

const LinkTab:React.FC<LinkTabProps> = (props:LinkTabProps) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); 
      }}
      {...props}
    ></Tab>
  );
}

const useStyles = makeStyles((theme:Theme) => ({
  AppBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "black"
  },
}));

const NavTabs:React.FC = (Props:any) => {
  const classes = useStyles(Props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue:number) =>{
    setValue(newValue);
  }

  return (
    <div>
      <AppBar position="static" className={classes.AppBar}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs">
          <LinkTab label="Home" href="/" {...a11yProps(0)}/>
            <LinkTab label="About" href="/About" {...a11yProps(1)} />
          <LinkTab label="Skills"href="/Skills" {...a11yProps(2)} />
          <LinkTab label="Works" href="/Works"{...a11yProps(3)} />
          <LinkTab label="Social" href="/Social"{...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page3
      </TabPanel>
      <TabPanel value={value} index={3}>
        Page4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Page5
      </TabPanel>
    </div>
  );
}

export default withRouter(NavTabs);
