import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* font-family: 'PT Sans', sans-serif; */
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }
  #root {
    margin: 0 auto;
  }

  body {
    background-color: #eee;
    height: 100vh;
    margin: 0 auto;
  }

  ::-moz-selection {
    background: #666666;
  }
  ::selection {
      background: #666666;
}
`;