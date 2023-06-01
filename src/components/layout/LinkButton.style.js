import styled from "styled-components";

export const Button = styled.div `
    display: inline-block;
    margin: 1.5rem 0;

    a {
        padding: 10px 20px;
        background: rgb(103 114 184);
        color: #fff;
        border: 1px solid rgb(103 114 184);
        border-radius: 8px;
        cursor: pointer;
        margin: 1rem 1.5rem;
        transition: 0.5s;

        &:hover {
            background: #fff;
            color: #8691D9;
        }
    }

    .transparent {
        background: rgba(34, 34, 34, 0.7);
        color: #8691D9;
        border: 1px solid #8691D9;
    }
`