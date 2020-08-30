// react関連
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// style

// component
import Navbar from './components/Navbar';

// pages
import About from './components/pages/About/index';
import Home from './components/pages/Home/index';
import Skills from './components/pages/Skills/index';
import Social from './components/pages/Social/index';
import Works from './components/pages/Works/index';

interface sideDrawerState {
  isOpen: boolean;
}

class App extends React.Component<{}, sideDrawerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  public render() {
    // let backDrop;
    // if (this.state.isOpen) {
    //   backDrop = <BackDrop backDropClickHandler={this.backdropClickHandler} />;
    // }
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/social" component={Social} />
            <Route path="/works" component={Works} />
            <Route path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
