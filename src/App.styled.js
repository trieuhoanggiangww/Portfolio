import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: #202020;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
    min-height: 100vh;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;   /* Căn giữa theo chiều ngang */
  width: 100%;
  padding: 40px 20px;
`;