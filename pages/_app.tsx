import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import {StyledEngineProvider} from '@mui/material/styles';

/**
  The site's component tree
  @param {object} props - The props object passed in.
  @param {FunctionComponent} props.Component - The component to be rendered.
  @param {object} props.pageProps - The page props object.
  @return {JSX.Element} - The wrapped component.
*/
export default function Site({Component, pageProps}: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
