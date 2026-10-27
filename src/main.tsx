import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { theme, globalStyles } from './shared/styles/theme';
import { LandingPage } from './pages/LandingPage';

createRoot(document.getElementById('root')!).render(<StrictMode><ThemeProvider theme={theme}><Global styles={globalStyles}/><LandingPage/></ThemeProvider></StrictMode>);
