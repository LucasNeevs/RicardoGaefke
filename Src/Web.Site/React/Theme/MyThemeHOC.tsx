import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import myTheme from './theme';
import { MyStateProvider } from '../Utils/AppContext';
import { useStateValue } from '../Utils/StateProvider';

const MyThemeHOC = (props: any): any => {
  const { children } = props;
  const { theme } = useStateValue();
  const MyColor = myTheme(theme);

  return (
    <MyStateProvider>
      <ThemeProvider theme={MyColor}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MyStateProvider>
  );
};
export default MyThemeHOC;