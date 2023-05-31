import styled from "styled-components";

export const Form_Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    h2 {
        margin-bottom: 2rem;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;

`

export const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bolder;
    background: #8691D9;
    color: #fff;
    border: 1px solid #8691D9;
    border-radius: 8px;
    cursor: pointer;
    margin: 1rem 0;
    transition: 0.5s;

    &:hover {
        background: #fff;
        color: #8691D9;
    }
`