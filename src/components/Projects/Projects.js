import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectDemo = [{
//   title: 'Project 1',
//   description: 'This is the description about the project.'
// },{
//  title: 'Project 2',
//  description: 'This is the description about the project.'
// },{
//  title: 'Project 3',
//  description: 'This is the description about the project.'
// },{
//  title: 'Project 4',
//  description: 'This is the description about the project.'
// }]
const Projects = () => (
  <Section padding>
    <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
         {
           projects.map(({id, image, title, description, source, visit, tags}) => (
            <div>
               <BlogCard key={id}>
                 <Img src={image}/>
                 <TitleContent>
                   <HeaderThree title>{title}</HeaderThree>
                   <Hr />
                   <CardInfo>{description}</CardInfo>
                 </TitleContent >
                 <div>
                   <TitleContent>
                     Stack
                   </TitleContent>
                   <TagList>
                       {
                         tags.map((tag,i)=>(
                           <Tag key={i}>{tag}</Tag>
                         ))
                       }
                     </TagList>
                 </div>
                 <UtilityList>
                   <ExternalLinks href='#'>Code</ExternalLinks>
                   <ExternalLinks href='#'>Source</ExternalLinks>
                 </UtilityList>
               </BlogCard>
            </div>
           ))
         }
      </GridContainer>
  </Section>
  );

export default Projects;