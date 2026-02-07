/**
 * Color Configuration
 * 
 * Centralized color palette for the application.
 * Modify these colors to customize the theme.
 * Colors are automatically integrated into Tailwind CSS.
 */

export const colors = {
  // Primary colors - purple (#982598)
  // Used for buttons, CTAs, links, and interactive elements
  primary: {
    50: '#fdf5fb',
    100: '#fbe8f6',
    200: '#f7d0ed',
    300: '#E491C9', // lighter pink accent
    400: '#d05fb0',
    500: '#982598', // main purple
    600: '#7c1d7c',
    700: '#651867',
    800: '#541455',
    900: '#461147',
    950: '#2b072b',
  },
  
  // Accent colors - deep navy (#15173D)
  // Used for dark backgrounds, headers, and footers
  accent: {
    50: '#f2f2f8',
    100: '#e2e3ef',
    200: '#c5c6de',
    300: '#9b9dc5',
    400: '#7173a8',
    500: '#535590',
    600: '#424478',
    700: '#353763',
    800: '#2a2c50',
    900: '#15173D', // deep navy base
    950: '#0c0d24',
  },
  
  // Soft rose accent (#F1E9E9 / #E491C9)
  // Used for decorative accents and subtle highlights
  gold: {
    50: '#fdf8f8',
    100: '#F1E9E9', // soft rose
    200: '#e5d5d5',
    300: '#E491C9', // pink accent
    400: '#c09595',
    500: '#a87575',
    600: '#8e5c5c',
    700: '#764c4c',
    800: '#634141',
    900: '#543939',
    950: '#2d1c1c',
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  // Semantic colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  
  // Warning
  warning: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  
  // Error
  error: {
    50: '#fef2f2',
    100: '#fde3e3',
    200: '#fbc8c8',
    300: '#f7a0a0',
    400: '#f06767',
    500: '#e63e3f',
    600: '#d63031',
    700: '#b32526',
    800: '#942324',
    900: '#7a2324',
    950: '#420e0e',
  },
  
  // Base colors
  white: '#ffffff',
  black: '#000000',
}
