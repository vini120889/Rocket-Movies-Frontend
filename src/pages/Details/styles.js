import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    main {

        > a {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            padding: 4rem 12.3rem 0;
            font-size: 1.6rem;
            color: ${ ({theme}) => theme.colors.yellow };
            margin-bottom: 2.4rem;
        }
    }
    

`;

export const Content = styled.div`
    width: calc(100% - 24.6rem);
    margin: 0 auto;
    max-height: 50rem;
    padding-right: 2.4rem;
    overflow-y: auto;
    scroll-behavior: smooth;

    .head {
        display: flex;
        align-items: center;
        margin-bottom: 2.4rem;

        h2 {
            margin-right: 1.9rem;
            font-size: 3.6rem;
            font-weight: 500;
            color: ${ ({theme}) => theme.colors.white_900 };
            
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${ ({theme}) => theme.colors.yellow };
            margin-right: 1rem;
        }
    }

    .stats {
        margin-bottom: 4rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;

        img {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
            border: 1px solid ${ ({theme}) => theme.colors.background_700 };
            object-fit: cover;
        }

        p {
            text-align: justify;
            font-size: 1.6rem;
            color: ${ ({theme}) => theme.colors.white_900 };

            span {
                font-weight: 500;
                color: ${ ({theme}) => theme.colors.white_800 };
            }
        }

        svg {
            width: 1.6rem;
            height: 1.6rem;
            color: ${ ({theme}) => theme.colors.yellow };

        }
    }

    > p {
        margin-top: 4rem;
        text-align: justify;
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.colors.white_900 };
        margin-bottom: 2rem;
    }

    &::-webkit-scrollbar {
        width: 0.8rem;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        height: 2rem;

        background-color: ${ ({theme}) => theme.colors.yellow };
        border-radius: 0.8rem;
    }

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.yellow} transparent;
`;
