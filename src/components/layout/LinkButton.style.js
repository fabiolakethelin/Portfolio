import styled from "styled-components";

export const Button = styled.div `
    display: inline-block;
    margin: 1.5rem 0;

    a {
        padding: 12px 24px;
        font-weight: bolder;
        background: #8691D9;
        color: #fff;
        border: 1px solid #8691D9;
        border-radius: 8px;
        cursor: pointer;
        margin: 1rem 1.5rem 1rem 0;
        transition: 0.5s;

        &:hover {
            background: #fff;
            color: #8691D9;
        }

        @media screen and (max-width: 768px) {
            padding: 10px 20px;
            font-weight: 500;
        }
    }

    .transparent {
        background: rgba(34, 34, 34, 0.7);
        color: #8691D9;
        border: 1px solid #8691D9;
    }
`