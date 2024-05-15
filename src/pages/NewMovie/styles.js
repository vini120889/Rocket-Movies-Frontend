import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > a {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 4rem 12.3rem 0;
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.colors.yellow };
        margin-bottom: 2.4rem;
    }
`;

export const Content = styled.form`
    width: calc(100% - 24.6rem);
    max-height: 47rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 4rem;
    overflow-y: auto;
    margin: 0 auto;
    padding-right: 1.6rem;

    h2 {
        font-size: 3.6rem;
        font-weight: 500;
        color: ${ ({theme}) => theme.colors.white_900 };

    }

    .wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    textarea {
        width: 100%;
        display: flex;
        min-height: 25rem;
        padding: 1.9rem 1.6rem;
        align-items: start;
        gap: 0.8rem;
        align-self: stretch;
        resize: none;
        border-radius: 1rem;
        border: none;
        background-color: ${ ({theme}) => theme.colors.background_800 };
        color: ${ ({theme}) => theme.colors.white_900 };
        font-size: 1.6rem;


        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${ ({theme}) => theme.colors.background_600 };
        }

        &::-webkit-scrollbar {
            width: 0.8rem;
            height: 9.6rem;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${ ({theme}) => theme.colors.yellow };
            border-radius: 0.8rem;
        }

        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.colors.yellow } transparent;
    }

    h3 {
        font-size: 2rem;
        color: ${ ({theme}) => theme.colors.gray_100 };
        margin-bottom: 2.4rem;
    }

    .tags {
        width: 100%;
        min-height: 8.8rem;
        display: flex;
        flex-wrap: wrap;
        padding: 1.6rem;
        align-items: start;
        gap: 2.4rem;
        align-self: stretch;
        background-color: ${ ({theme}) => theme.colors.gray_400 };
        border-radius: 0.8rem;

    }

    .button {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4rem;

    }

    &::-webkit-scrollbar {
        width: 0.8rem;
        height: 9.6rem;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ ({theme}) => theme.colors.yellow };
        border-radius: 0.8rem;
    }

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.yellow} transparent;
`;