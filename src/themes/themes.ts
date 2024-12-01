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
    veryStrong: 'green'
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
    veryStrong: 'green'
  };
  
  export const themes: Record<'light' | 'dark', Theme> = { light: lightTheme, dark: darkTheme };
  