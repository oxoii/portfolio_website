import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section  row nopadding >
    <LeftSection>
      <SectionTitle main center >
        Hi, there!  
      </SectionTitle>
      <SectionText>My name is Yuhan. <br/>I'am looking for a development job</SectionText>
      <Button Onclick={()=>window.location="/"}>Learn more</Button>
    </LeftSection>
  </Section>
  );

export default Hero;