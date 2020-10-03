import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import EMail from '@material-ui/icons/Email';
import SvgIcon from '@material-ui/core/SvgIcon';
import { RiSteamFill } from 'react-icons/ri';

// contexts
import { SocialContext } from 'App';

function SteamIcon() {
  return <SvgIcon component={RiSteamFill} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(0),
  },
  content: {
    padding: theme.spacing(4),
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    margin: theme.spacing(2),
    marginBottom: theme.spacing(0),
    color: theme.palette.text.primary,
  },
}));

type icon = {
  media: string;
  link: string;
  icon?: any;
};

function Social() {
  const classes = useStyles();
  const contents: icon[] = useContext(SocialContext);

  const newContents: icon[] = contents.reduce(
    (newContents: icon[], content) => {
      if (content.media === 'Twitter') {
        content.icon = Twitter;
      } else if (content.media === 'GitHub') {
        content.icon = GitHub;
      } else if (content.media === 'EMail') {
        content.icon = EMail;
      } else if (content.media === 'steam') {
        content.icon = SteamIcon;
      }
      newContents.push(content);
      return newContents;
    },
    [],
  );

  return (
    <Paper className={classes.root} id="social">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              align="center"
            >
              Social
            </Typography>
            <Divider className={classes.divider} />
            <Grid container className={classes.iconContainer}>
              {newContents.map((item: icon, key) => (
                <Link
                  display="block"
                  variant="body1"
                  href={item.link}
                  key={key}
                >
                  <Grid item key={key} className={classes.icon}>
                    <item.icon />
                  </Grid>
                </Link>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Social;
