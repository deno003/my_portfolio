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
import homeContents from 'contents/homeContent.json';
import worksContents from 'contents/worksContents.json';
import aboutContents from 'contents/aboutContents.json';
import skillsContents from 'contents/skillsContents.json';

// context
export const HomeContext = createContext(homeContents);
export const WorksContext = createContext(worksContents);
export const AboutContext = createContext(aboutContents);
export const SkillsContext = createContext(skillsContents);

function App() {
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <HomeContext.Provider value={homeContents}>
            <WorksContext.Provider value={worksContents}>
              <AboutContext.Provider value={aboutContents}>
                <SkillsContext.Provider value={skillsContents}>
                  <div className="App">
                    <Main />
                  </div>
                </SkillsContext.Provider>
              </AboutContext.Provider>
            </WorksContext.Provider>
          </HomeContext.Provider>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
}

export default App;
