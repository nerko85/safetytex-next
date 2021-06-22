import styled from "styled-components";

const Brands = styled.div`
    margin-top:5rem;
    padding:3rem;
    background:${({theme})=>theme.primary};

    .swiper-wrapper {
        display: flex;
        align-items: center;
        text-align:center;
    }

    .navigation {
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        color:#fff;
        cursor:pointer;
        z-index:9999;
        opacity:.8;
        font-size:1.2rem;
        transition:${({theme})=>theme.transition};

        &:hover {
            opacity:1;
        }

        &.prev-button {
            left:0;
        }      

        &.next-button {
            right:0;
        }        
    }
`

export {
    Brands
}