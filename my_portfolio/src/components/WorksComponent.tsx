import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActioArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  media: {
    height: 200,
    margin: theme.spacing(1),
    marginBottom: theme.spacing(0),
  },
}));

type iProps = {
  item?: item;
};

type item = {
  title?: string;
  tools?: string;
  text?: string;
  link?: string;
  gitHubUrl?: string;
  image?: string;
};

function MediaCard(props: iProps) {
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <CardActioArea>
        <CardMedia
          className={classes.media}
          image={`${process.env.PUBLIC_URL}${props.item?.image}`}
          title="thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item?.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.item?.text}
          </Typography>
        </CardContent>
      </CardActioArea>
      <CardActions>
        <Button size="small" color="inherit" href={props.item?.link}>
          Link
        </Button>
        <Button size="small" color="inherit" href={props.item?.gitHubUrl}>
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
