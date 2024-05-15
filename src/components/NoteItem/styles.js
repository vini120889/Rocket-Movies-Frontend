import { styled } from "styled-components";

export const Container = styled.div`
    
    display: flex;
    height: 5.6rem;

    align-items: center;
    justify-content: center;
    background-color: ${ ({theme, $isnew}) => $isnew ? "transparent" : theme.colors.background_800 };
    color: ${ ({theme}) => theme.colors.white_900 };
    border: ${ ({theme, $isnew}) => $isnew ? `2px dashed ${theme.colors.background_600}` : "none" };
    border-radius: 1rem;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;

        svg {
            font-size: 2.4rem;
        }
    }

    .button-delete, .button-add {
        color: ${ ({theme}) => theme.colors.yellow };
        width: 2.4rem;
        height: 2.4rem;
    }

    > input {
        width: 15rem;
        padding: 1.2rem;
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.colors.white_900 };
        background: transparent;
        border: none;

        &::placeholder {
            color: ${ ({theme}) => theme.colors.background_600 };

        }

        &:focus {
            outline: none;
        }

    }

`;