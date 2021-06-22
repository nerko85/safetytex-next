import styled from "styled-components";

const About = styled.div`

    .content {
        display:grid;
        grid-gap:3rem;
        grid-template-columns:repeat(2, 1fr);

        .media {
            ${({type})=>type=="about"? "margin-bottom":"margin-top"}:-10rem;
            order:${({type})=>type=="about"? "unset":"2"};
            justify-self:end;
        }

        &>* {
            flex:1;
        }
        .text-content {
            flex:2;
            padding-bottom:4rem;
            align-self:${({type})=>type=="about"? "flex-start":"flex-end"};
        }

       
        @media(max-width:${({theme})=>theme.tablet}){
            grid-gap:1rem;
            grid-template-columns:1fr;

            .media {
                margin-bottom:1rem;
                justify-self:center;
            }
        }
    }
    
`

export {About}