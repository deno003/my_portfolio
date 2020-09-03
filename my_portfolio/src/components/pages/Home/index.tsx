import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { TopTitleWrapper } from 'shared/styles/titleWrapper.js';

class Home extends Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Helmet>
          <title>deno_etml'd portfolio site</title>
        </Helmet>
        <TopTitleWrapper>Hello, I'm Deno_etml</TopTitleWrapper>
      </div>
    );
  }
}

export default Home;
