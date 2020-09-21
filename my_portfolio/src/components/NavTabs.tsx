import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { animateScroll, scroller } from 'react-scroll';
import Tab from '@material-ui/core/Tab';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  AppBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: theme.palette.common.black,
    flexGrow: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    color: theme.palette.common.white,
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
    color: theme.palette.common.white,
  },
}));

const sections = [
  { title: 'About', url: 'about' },
  { title: 'Skills', url: 'skills' },
  { title: 'Works', url: 'works' },
  { title: 'Social', url: 'social' },
];

type LinkTabProps = {
  label: string;
  href: string;
};

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const targetElement: any = document.getElementById(props.href);
        const elementPosition: any = targetElement.getBoundingClientRect();
        animateScroll.scrollTo(elementPosition.top + window.pageYOffset);
      }}
      {...props}
    ></Tab>
  );
}

function NavTabs(Props: any) {
  const classes = useStyles(Props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    scroller.scrollTo('scrollElementToAbout', {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: 'scrollElementToAbout',
    });
  };

  return (
    <div>
      <AppBar position="static" className={classes.AppBar}>
        <div>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs"
          >
            {sections.map((section) => (
              <LinkTab label={section.title} href={section.url} />
            ))}
          </Tabs>
        </div>
      </AppBar>
    </div>
  );
}

export default NavTabs;
