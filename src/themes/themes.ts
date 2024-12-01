type Theme = {
    background: string;
    text: string;
    mainPurple: string;
    mainLightPurple: string;
    veryWeak: string;
    weak: string;
    medium: string;
    strong: string;
    veryStrong: string;
    gray: string;

  };
  
  const lightTheme: Theme = {
    background: '#f0f0f0',
    text: '#000000',
    mainPurple: '#6200EE',
    mainLightPurple: '#B88AE8',
    veryWeak: 'red',
    weak: 'red',
    medium: 'orange',
    strong: 'orange',
    veryStrong: 'green',
    gray: '#767577',
  };
  
  const darkTheme: Theme = {
    background: '#383838',
    text: '#FFFFFF',
    mainPurple: '#6200EE',
    mainLightPurple: '#B88AE8',
    veryWeak: 'red',
    weak: 'red',
    medium: 'orange',
    strong: 'orange',
    veryStrong: 'green',
    gray: '#767577',
  };
  
  export const themes: Record<'light' | 'dark', Theme> = { light: lightTheme, dark: darkTheme };
  