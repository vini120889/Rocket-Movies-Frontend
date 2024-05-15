import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 3.2rem;
    background-color: rgba(255, 133, 155, 0.05);
    border-radius: 1.6rem;
    cursor: pointer;
    

    h3 {
        font-size: 2.4rem;
        color: ${ ({theme}) => theme.colors.white_900 };
        margin-bottom: 0.8rem;

    }

    p {
        align-self: stretch;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.colors.gray_100 };
        white-space: nowrap;
        margin-bottom: 1.5rem;
    }

    footer {
        width: 100%;
        display: flex;
        align-items: center;
    }

`;

export const Stars = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 1.5rem;
    
    svg {
        width: 1.2rem;
        height: 1.2rem;
        color: ${ ({theme}) => theme.colors.yellow };
    }
`;