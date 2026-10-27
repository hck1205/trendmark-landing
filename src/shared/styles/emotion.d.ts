import '@emotion/react';
import type { theme } from './theme';
declare module '@emotion/react' { export interface Theme extends typeofTheme {} }
type typeofTheme = typeof theme;
