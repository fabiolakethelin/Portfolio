import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 4rem;
`

export const Card = styled.div`
    background: rgba(2, 49, 110, 0.2);
    border-radius: 10px;
    padding: 0.5rem;

    img {
        width: 100%;
    }

    h3 {
        padding: .8rem 0;
        text-align: center;
    }
`

export const Details = styled.div`
    p {
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0.5rem 0 0.5rem;
    }
`

