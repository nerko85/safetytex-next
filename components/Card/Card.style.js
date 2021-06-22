import styled from "styled-components";

const Card = styled.div`
    p {
        font-size:16px;
        color:#fff;
        padding:0 1rem;
    }

    img{
        transition:${({theme})=>theme.transition};
        transform:scale(.8);
        cursor:pointer;

        &:hover {
            transform:scale(1);
        }
    }
`

export {Card}