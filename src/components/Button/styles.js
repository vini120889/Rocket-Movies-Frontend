import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    display: flex;
    padding: 1.6rem;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${ ({theme, $delete}) => $delete ? theme.colors.gray_400 : theme.colors.yellow };
    color: ${ ({theme, $delete}) => $delete ? theme.colors.yellow : theme.colors.gray_300 };
    font-weight: 500;
    font-size: 1.6rem;
    border: none;

`;