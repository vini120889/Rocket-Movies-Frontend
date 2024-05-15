import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Form = styled.div`
    width: 50%;
    padding: 0 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 4.8rem;
        color: ${ ({theme}) => theme.colors.yellow };
    }

    p {
        font-size: 1.4rem;
        color: ${ ({theme}) => theme.colors.gray_200 };
    }

    h2 {
        margin-block: 4.8rem;
        font-size: 2.4rem;
        font-weight: 500;
        color: ${ ({theme}) => theme.colors.white_900 };
    }

    div:nth-child(5) {
        margin: 0.8rem 0;  
    }

    div:nth-child(6) {
        margin-bottom: 1.6rem;  
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.colors.yellow };
        margin-top: 4.2rem;
    }
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;