import styled from "styled-components";

export const Container = styled.span`
    width: fit-content;
    padding: 0.5rem 1.6rem;
    border-radius: 0.8rem;
    background-color: ${ ({theme}) => theme.colors.gray_300 };
    color: ${ ({theme}) => theme.colors.white_800 };
    font-size: 1.2rem;
    margin-right: 0.8rem;
    
`;