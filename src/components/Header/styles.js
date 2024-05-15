import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 11.6rem;
    display: flex;
    gap: 6.4rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 12.3rem;
    border-bottom: 1px solid ${ ({theme}) => theme.colors.background_700 };   

    h1 {
        font-size: 2.4rem;
        font-weight: 700;
        color: ${ ({theme}) => theme.colors.yellow };
    }

    .profile {
        display: flex;
        align-items: center;

        .content {
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: end;
            
            a {
                font-size: 1.6rem;
                font-weight: 700;
                color: ${ ({theme}) => theme.colors.white_900 };
            }

            button {
                font-size: 1.4rem;
                text-align: left;
                color: ${ ({theme}) => theme.colors.background_600 };
                background: transparent;
                border: none;
            }

            
        }
        
        img {
            width: 6.4rem;
            height: 6.4rem;
            border-radius: 50%;
            border: 1px solid;
            border-color: ${ ({theme}) => theme.colors.background_700 };
            margin-left: 0.9rem;
            object-fit: cover;
        }

    }
`;