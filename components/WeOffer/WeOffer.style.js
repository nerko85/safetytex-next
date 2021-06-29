import styled from "styled-components";

const WeOffer = styled.div`
    padding:10rem 0;
    background:url(${({bg})=>bg}) no-repeat;
    background-size:cover;

    .inner {
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: repeat(2, 1fr);

        .text-content {
            p{
                margin:2rem;
                margin-left:0;
            }
        }

    }

    @media(max-width:${({theme})=>theme.tablet}){
        padding:3rem 0;

        .inner {
            grid-gap: 2rem;
            grid-template-columns: 1fr;
        }
    }    
`

export {WeOffer}