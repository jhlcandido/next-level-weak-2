// import original module declarations
import 'styled-components/native';

// and extend them!
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundLigth: string;
      backgroudnLighter: string;
      primary: string;
      secondary: string;
      buttonPrimary: string;
      buttonSecondary: string;
      textLight: string;
    };

    fontFamily: {
      textRegular: string;
      textBold: string;
      titleRegular: string;
      titleBold: string;
    };
  }
}
