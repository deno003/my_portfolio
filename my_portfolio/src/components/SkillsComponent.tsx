import * as React from 'react';
import {
  makeStyles,
  Theme,
  withStyles,
  createStyles,
} from '@material-ui/core/styles';

// material-ui
import { Card, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from '@material-ui/core/LinearProgress';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    alignItems: 'center',
    maxWidth: 500,
    maxHeight: 100,
  },
  details: {
    flexDirection: 'column',
    flex: '1 0 auto',
  },
  content: {
    alignContent: 'center',
  },
  cover: {
    position: 'relative',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '17%',
    height: 'auto',
    maxWidth: '256px',
    maxHeight: '256px',
  },
  progress: {
    paddingTop: theme.spacing(1),
  },
}));

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);

type iProps = {
  item?: item;
};

type item = {
  image?: string;
  name?: string;
  level?: number;
  usecase?: string;
};

function SkillsComponent(props: iProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        component="img"
        // image={props.item?.image}
        src={`${process.env.PUBLIC_URL}/svg/${props.item?.image}.svg`}
        // title={props.item?.name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="subtitle1">
            {props.item?.name}
          </Typography>
          <Typography variant="body1">
            UseCase: {props.item?.usecase}
          </Typography>
          <div className={classes.progress}>
            <BorderLinearProgress
              variant="determinate"
              value={props.item?.level}
            />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default SkillsComponent;
