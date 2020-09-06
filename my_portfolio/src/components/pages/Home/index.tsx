import React from 'react';
import { Helmet } from 'react-helmet';
import { TopTitleWrapper } from 'shared/styles/titleWrapper';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['200'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 400,
  },
}));
 
const Home:React.FC = (Props:any) => {
  const classes = useStyles(Props);
  return(
    <div>
      <div className={classes.root}>
        <Helmet>
          <title>deno_etml'd portfolio site</title>
        </Helmet>
        <TopTitleWrapper>Hello, I'm Deno_etml</TopTitleWrapper>
      </div>
    </div>
    )
  };


export default Home;
