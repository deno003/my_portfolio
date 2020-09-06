// react関連
import React　from 'react';

// style
import theme from './shared/styles/theme';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// components
import NavTabs from './components/NabTabs';

const App:React.FC = () => {
  
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <div className="App">
            <NavTabs />
          </div>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
}

export default App;
