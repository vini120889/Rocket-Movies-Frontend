import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    .header {
        width: 100%;
        height: 14.4rem;
        background-color: rgba(255, 133, 155, 0.05);
        display: flex;
        align-items: center;
        
        a {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            padding: 0 14.4rem;
            color: ${ ({theme}) => theme.colors.yellow };
            font-size: 1.6rem;
        }
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 34rem;
    margin: -10rem auto;

    div:nth-child(3) {
        margin: 0.8rem 0 2.4rem;
    }

    div:nth-child(5) {
        margin: 0.8rem 0 2.4rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 6.4rem;
    width: 18.6rem;
    height: 18.6rem;


    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
        object-fit: cover;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        background-color: ${ ({theme}) => theme.colors.yellow };
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: .6rem;
        right: .6rem;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${ ({theme}) => theme.colors.gray_300 };
        }
    }
`;