import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { TopTitleWrapper } from 'shared/styles/titleWrapper';
import withStyles, {WithStyles} from "@material-ui/styles/withStyles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import NavBar from 'components/Navbar';

const styles = (theme:any) => ({
  root:{
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  }
});

// withRouterの引数はコンポーネントのPropsにRouteComponentPropsを指定したコンポーネントである必要がある。
// componentのpropsをwithStyles<typeof styles>で拡張
interface Props extends RouteComponentProps<{}>, React.Props<{}>, WithStyles<typeof styles> {
  // drawToggleClickHandler(): void;
}

class Home extends Component<Props> {

  componentDidMount(){};

  public render() {
    const {classes} = this.props;
    return (
      <div>
        <NavBar />
          <div className={classes.root}>
          <Helmet>
            <title>deno_etml'd portfolio site</title>
          </Helmet>
          <TopTitleWrapper>Hello, I'm Deno_etml</TopTitleWrapper>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Home));
