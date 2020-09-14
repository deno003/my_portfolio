import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// material-ui
import { Card, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
    width: '15%',
    height: '15%',
  },
}));

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
        </CardContent>
      </div>
    </Card>
  );
}

export default SkillsComponent;
