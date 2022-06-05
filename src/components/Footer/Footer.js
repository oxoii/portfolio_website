import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+44 07391785588'>(0)7391xxxxxx</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:yuhan728@outlook.com'>yuhan728@outlook.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Hire me!</Slogan>
        </CompanyContainer>
        <SocialIcons href="#">
          <AiFillGithub size="3rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="#">
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons href="#">
          <AiFillInstagram size="3rem"></AiFillInstagram>
        </SocialIcons>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
