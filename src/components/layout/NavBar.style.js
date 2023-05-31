import styled from "styled-components";

export const Header = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 1rem 2rem;

    img {
        width: 50px;
        border-radius: 50px;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`

export const NavIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        position: ${({open}) => (open ? 'fixed' : 'static')};
        right: 1rem;
        cursor: pointer;
        z-index: 2;
        font-size: 20px;
        color: #fff;
    }
`

export const NavContent = styled.div`
    display: flex;

    .list {
        margin: auto;
    }

    ul {
        display: flex;
    }

    li {
        padding: 0 1rem;
    }

    a {
        color: #fff;
        font-weight: 500;
        margin-left: 1rem;

        &:hover {
            color: #8691D9;
            transition: 0.2s ease-in-out;
        }
    }

    @media screen and (max-width: 768px) {
        display: ${({open}) => (open ? 'flex' : 'none')};
        flex-direction: column;
        text-align: center;
        background: rgb(47, 47, 47);
        height: 100%;
        width: 230px;
        padding: 1rem 2rem;
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1;
        box-shadow: 0px 5px 5px rgba(51, 51, 51, 0.31);
        transition: 0.5s;

        .list ul {
            display: flex;
            flex-direction: column;
        }

        .list li a:hover {
                color: #8691D9;
        }

        .list a {
            color: #fff;
            display: block;
            font-size: 1.1rem;
            margin: 3rem 0;
        }
    }
`

export const CloseMenu = styled.div`
    display: ${({open}) => (open ? 'block' : 'none')};
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;

    @media screen and (min-width: 768px) {
        display: none;
    }
`