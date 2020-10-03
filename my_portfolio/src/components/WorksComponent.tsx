import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
  link: {
    '&:hover': {
      color: theme.palette.text.secondary,
      opacity: 1,
    },
    color: theme.palette.text.primary,
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
      <CardActions>
        <Link
          display="block"
          variant="body1"
          href={props.item?.link}
          target="_blank"
          rel="noopener"
          className={classes.link}
        >
          <Button size="small" color="inherit">
            Link
          </Button>
        </Link>
        <Link
          display="block"
          variant="body1"
          href={props.item?.gitHubUrl}
          target="_blank"
          rel="noopener"
          className={classes.link}
        >
          <Button size="small" color="inherit">
            GitHub
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
