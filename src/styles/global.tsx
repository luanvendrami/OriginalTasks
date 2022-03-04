import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --red: #E52E4D;
    --green: #074e00;
    --blue: #5429CC;
    --orange: #f07400eb;
    --grenLight: #00ff0d;

    --blue-light: #002280;

    --text-button: white;
    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
}

html{
    @media (max-width: 1080px){
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px){
        font-size: 87.5% //14px
   
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
font-family: 'Poppins', sans-serif;
font-weight: 400,
}

body, input, textarea, button {
font-family: 'Poppins', sans-serif;
font-weight: 400,
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`;
