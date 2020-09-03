// react関連
import * as React from 'react';

// style
import theme from './shared/styles/theme'
import { ThemeProvider as MaterialThemeProvider, StylesProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider} from 'styled-components';

// Router
import Routes from './routes';


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
    return (
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <div className="App">
                <Routes />
              </div>
         </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    );
  }
}

export default App;
