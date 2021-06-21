import React from "react";
import Image from 'next/image'
import {Footer as StyledFooter, CopyRight} from './Footer.styled'

export default function Footer() {
  return (
  <StyledFooter>
    <div className="container">
      <CopyRight>
       <p>© Copyright 2021 SafetyTex. Sva prava pridržana!</p>
        <Image 
          src="/images/Group484.svg" 
          alt="Safetytex logo" 
          height="24px" 
          width="27px"/>
      </CopyRight>
    </div>
  </StyledFooter>
  )
}
