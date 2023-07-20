import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import {StyledEngineProvider} from '@mui/material/styles';

export default function Site({Component, pageProps}: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider defaultTheme='system'>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
