import { rem } from "polished";
import { createGlobalStyle } from "styled-components";
import { fontFamily, typeScale } from "./typography";

export const GlobalStyles = createGlobalStyle`
html{
    box-sizing: border-box;
}

*,*::after,*::before{
    box-sizing: inherit;
}

body{
    margin: 0;
    font-size: ${rem(typeScale.paragraph)};
    font-family: ${fontFamily};
}
`;
