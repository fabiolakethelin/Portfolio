import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;;
  }

  html, body, #root {
    background-color: rgb(0, 0, 0, 0.5);
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  h1, h2, h3, p {
    color: #fff;
  }

  @media screen and (max-width:768px) {
    h1 {
      font-size: 2.4rem;
    }
    
    h2 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`