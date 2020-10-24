import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import styled, { css } from "styled-components";

import Img from "gatsby-image";
import AspectRatioBox from "./aspect-ratio-box";

export const Title = styled(Heading)`
  font-weight: 600;
  margin: 0;

`;

export const Description = styled(Text)`
  font-weight: 600;
  line-height: 1.35em;
  margin: 0;

`;

export const Category = styled(Text)`

  font-weight: normal;
  margin: 0;
`;


const HeroWrap = styled(Box)`
  ${props =>
    props.truncated &&
    css`
      max-height: 200px;
      overflow: hidden;
    `}
`;


const Hero = ({ img, truncated }) => {
  return (
    <HeroWrap mt={[4, 5]} truncated={truncated}>
      <AspectRatioBox ratio={8 / 5}>
        <div className="fill">
        <Img
            fluid={img}
          />
        </div>
      </AspectRatioBox>
    </HeroWrap>
    );
};
  

const ProjectHeader = ({ project, truncated }) => (
    <header>
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]}>
        <Title as="h1">{project.title}</Title>
        {/* <Box mt={3}>
          <Category as="h3">{project.category.title}</Category>
        </Box> */}
      </Box>
      <Box width={[1, 1 / 2]}>
        <Box mt={[3, 0]}>
          <Description as="h2">{project.description}</Description>
        </Box>
      </Box>
    </Flex>
    <Hero img={project.img} truncated={truncated} />
  </header>
  );

  export default ProjectHeader;