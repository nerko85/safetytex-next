import styled from "styled-components";


const Footer = styled.footer`
    padding-top:2rem;
    background:${({theme})=>theme.primary}
`

const CopyRight = styled.div`
    display:flex;
    gap:.5rem;

    p {
        font-size:10px;
        color:#fff;
    }
`

export {
    Footer,
    CopyRight
}