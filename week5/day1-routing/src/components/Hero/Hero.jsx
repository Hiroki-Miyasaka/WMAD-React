import React from 'react'
import styled from "styled-components";

const CustomButton = styled.button`
    padding: 8px 14px;
`;

const Title = styled.h1`
    margin: 6px 0;
`;

const Paragraph = styled.p`
    margin: 12px 0;
`;

const Hero = () => {
  return (
    <div>
        <Title>Discover Routing</Title>
        <Paragraph>Irure id incididunt ad nisi veniam do ex aliquip sint est cupidatat. Laboris voluptate et ea consectetur aliquip do duis laboris eiusmod do mollit amet sunt. Nostrud sit reprehenderit occaecat nulla veniam ipsum. Adipisicing quis consectetur nisi magna adipisicing exercitation reprehenderit est esse nisi est culpa non ipsum. Voluptate exercitation nostrud elit sint Lorem officia.</Paragraph>
        <CustomButton>Discover</CustomButton>
    </div>
  )
}

export default Hero