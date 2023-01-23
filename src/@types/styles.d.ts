import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      blue: {
        800: string,
        500: string,
      },
      purple: string,
      green: string,
      white: string,
      gradient: string,
    },
  }
}
