import React from 'react'
import {WeOffer as StyledOffer} from './WeOffer.style'
import Image from 'next/image'

import Tag from '../../containers/Tag'
import Button from '../../containers/Button'

export default function WeOffer({bg, image}) {
    return (
        <StyledOffer bg={bg}>
            <div className="container">
                <div className="inner">
                    <Image src={image} alt="store front image" width="444px" height="373px"/>
                    <div className="text-content">
                        <Tag>ŠTA MI TO NUDIMO</Tag>
                        <h1>Let's growth your business </h1>
                        <p>
                            The four major types of construction include
                            residential building, institutional and commercial 
                            building, specialized industrial construction.
                        </p>
                        <Button url="/o-nama">Learn More</Button>
                    </div>
                </div>   
            </div>
        </StyledOffer>
    )
}
