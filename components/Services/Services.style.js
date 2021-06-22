import styled from "styled-components";

const Services = styled.div`
    padding:15rem 0;
    background:${({theme})=>theme.primary};
    color:#fff;
    text-align:center;

    .cards {
        padding:3rem 0;
        display:grid;
        grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    }

    @media(max-width:${({theme})=>theme.tablet}){
        padding:2rem 0;
        margin-top:0;
    }
`

export {Services}