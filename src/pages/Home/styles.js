import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;


    .wrapper {
        padding: 0 12.3rem;

        > .content {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 4.8rem 0 3.8rem;
    
            h2 {
                font-size: 3.2rem;
                font-weight: normal;
                color: #fff;
            }

            a {
                height: 4.8rem;
                display:flex;
                padding: 1.6rem;
                align-items: center;
                gap: 0.8rem;
                border-radius: 0.8rem;
                background-color: ${ ({theme}) => theme.colors.yellow };
                color: ${ ({theme}) => theme.colors.background_800 };
                font-size: 1.6rem;

            }
        }
    
        > .movies {
            width: 100%;
            max-height: 45rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.4rem;
            overflow-y: auto;
            padding-right: 0.8rem;
            scroll-behavior: smooth;

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
            
        }
    }
    
`;

export const Header = styled.header`
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
