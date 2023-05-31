import styled from "styled-components";

export const Input_Container = styled.div`
    input {
        background: rgb(0, 0, 0, 0.3);
        border: 1px solid #8691D9;
        border-radius: 8px;
        font-size: 1rem;
        padding: 12px;
        margin: 1rem 0;
        width: 100%;
    }

    input::placeholder {
        color: #7b7b7b;
    }

    input:focus {
        background: #fff;
    }
`