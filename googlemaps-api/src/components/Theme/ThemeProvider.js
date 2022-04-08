import React from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { useEmiConfig } from '@snc/emi-config';
import merge from 'lodash/merge';
import { Loader } from 'components/Loader/Loader';
import { sanitizeThemeConfig } from 'components/Theme/themeUtils';

const DEFAULT_THEME = createMuiTheme({});

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
  const config = useEmiConfig();
  const [theme, setThemeInternal] = React.useState(createMuiTheme(DEFAULT_THEME));

  const setTheme = React.useCallback((theme) => {
    setThemeInternal(createMuiTheme(merge(DEFAULT_THEME, theme)));
  }, []);

  React.useEffect(() => {
    if (!config) return;
    const newThemeConfig = sanitizeThemeConfig(config.THEME, config.API_BASE_URI);
    if (newThemeConfig) {
      setTheme(newThemeConfig);
    }
  }, [config, setTheme]);

  if (!config) {
    return <Loader />;
  }

  return (
    <ThemeContext.Provider value={{ setTheme }}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
