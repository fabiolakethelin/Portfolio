import styled from "styled-components";

export const Mask = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    &::after {
        background: rgba(34, 34, 34, 0.8);
        box-shadow: 0px 1px 7px black inset;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }
`

export const Content = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;
    margin-top: 3rem;

    span {
        color: #8691D9;
    }

    h1 {
        margin: 1.5rem 0;
    }
`