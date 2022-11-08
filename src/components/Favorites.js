import styled from "styled-components";

export const StyledFavorites = styled.div`
    padding: 16px;

    section{
        padding: 16px;
        border-top: 2px solid #9f9f9f;
    }

    h2 {
        font-size: 16px;
        text-transform: capitalize;
    }

    div {
        display: flex;
        padding: 16px;
        gap: 16px;
    }

    div a {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-items: center;
    }

    section a img{
        border-radius: 50%;
    }

    section a span {
        width: 88px;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        color: #222222;
    }
        
`