import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// styles
const useStyles = makeStyles((theme:Theme) => ({
  AppBar: {
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

const NavTabs:React.FC = (Props:any) => {
  const classes = useStyles(Props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue:number) =>{
    setValue(newValue);
  }

  return (
    <div>
      <div className={classes.TabPanel}>
      </div>
      <AppBar position="static" className={classes.AppBar}>
      <div className={classes.LinkTab}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs">
          <LinkTab label="Home" href="/" {...a11yProps(0)}/>
          <LinkTab label="About" href="/About" {...a11yProps(1)} />
          <LinkTab label="Skills"href="/Skills" {...a11yProps(2)} />
          <LinkTab label="Works" href="/Works"{...a11yProps(3)} />
          <LinkTab label="Social" href="/Social"{...a11yProps(4)} />
        </Tabs>
        </div>
      </AppBar>
    </div>
  );
}

export default NavTabs;
