import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActioArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type iProps = {
  title?: string;
  tools?: string;
  text?: string;
  link?: string;
  gitHubUrl?: string;
}[];

function MediaCard(props: iProps) {
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <CardActioArea>
        <CardMedia className={classes.media} image="" title="thumbnail" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Portfolio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            このポートフォリオサイトです。React hooks+TypeScriptで作成しました。
          </Typography>
        </CardContent>
      </CardActioArea>
      <CardActions>
        <Button size="small" color="primary">
          Link
        </Button>
        <Button size="small" color="primary">
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
