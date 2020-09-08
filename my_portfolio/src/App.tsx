// react関連
import React, { createContext } from 'react';

// style
import theme from './shared/styles/theme';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// components
import Main from 'pages/Main';

// contents
import worksContents from 'contents/worksContents.json';

// context
export const WorksContext = createContext(worksContents);

function App() {
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <WorksContext.Provider value={worksContents}>
            <div className="App">
              <Main />
            </div>
          </WorksContext.Provider>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
}

export default App;
