import styled from "styled-components";

export const About_Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    background: rgb(0, 0, 0, 0.2);
    width: 100%;
    padding: 6rem 4rem;
    margin: 3rem 0;
    clip-path: polygon(0 0, 100% 7%, 100% 100%, 0% 93%);

    @media screen and (max-width: 940px) {
        grid-template-columns: 1fr;
    }
`

export const Intro = styled.div`
    max-width: 80%;
    margin: auto;

    h3 {
        margin: 1rem 0 1.5rem;
    }

    span {
        color: #8691D9;
    }

    p {
        font-size: .9rem;
        text-align: justify;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 940px) {
        h2, h3{
            text-align: center;
        }
    }
`

export const Img_Container = styled.div`
    margin: auto;
    
    .portrait{
        width: 9rem;
        border-radius: 9rem 9rem 2rem 2rem;
        overflow: hidden;
        margin-top: 2rem;
    }
    
    .portrait img {
        width: 100%;
        object-fit: cover;
    }
`