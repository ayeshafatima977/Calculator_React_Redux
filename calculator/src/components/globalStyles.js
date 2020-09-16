// @Link:https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
//Borrowed Snippet :Starts
import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }`;
  //Borrowed Code Ends

/*
We’ve imported createGlobalStyle from styled-components.This method generates a React component, which, when added to your component tree, will inject global styles into the document, in our case, App.js.
We defined a GlobalStyle component and assigned background and color properties to values from the theme object. Thus, every time we switch the toggle, the values will change depending on the dark theme or light theme objects that we are passing to ThemeProvider (which will be created later, as we proceed).
The transition property of 0.50s enables this change to occur a little more smoothly, so that as we toggle back and forth, we can see the changes happen
*/
