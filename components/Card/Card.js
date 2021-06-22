import React from 'react'
import Image from 'next/image'
import {Card as StyledCard} from './Card.style'
import Button from '../../containers/Button'

export default function Card({service}) {
    const {title, description, icon, url} = service;
    return (
        <StyledCard>
            <Image src={icon} height="118px" width="118px"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button url={url}><img src="/images/Group371.png" alt={title} /></Button>
        </StyledCard>
    )
}
