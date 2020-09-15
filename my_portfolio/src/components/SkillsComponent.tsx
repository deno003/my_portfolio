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
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    position: 'relative',
    margin: theme.spacing(2),
    width: '17%',
    height: '17%',
  },
  progress: {
    display: 'flex',
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
        src={props.item?.image}
        title={props.item?.name}
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
