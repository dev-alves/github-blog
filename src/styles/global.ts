import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    --moz-box-sizing: border-box;    /* Firefox, other Gecko */
  }

  :focus {
    outline: 0;
    border-color: ${(props) => props.theme['base-border']};
  }
  
  body {
    background-color: #071422;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }
  
`
