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
      max-height: 33vh;
      overflow: hidden;
    `}
`;


const Hero = ({ img, truncated }) => {
  return (
    <HeroWrap truncated={truncated}>
    <div className="c-block--full">
        <div className="img">
          
     
            <img
                src={img.url}
              />
  
        </div>
    </div>
    </HeroWrap>
    );
};
  

const ProjectHeader = ({ project, truncated }) => (

       <header className="c-hero--project"
        > 
        
            <div className="c-hero__content">
                <div className="o-content">
                    <div className="o-content__text">
                    <h1 className="sub-text"
                        data-scroll 
                        data-scroll-speed="1"
                        is-inview="anim-text"
                    >
                        {project.title}
                    </h1>
                    <h2 className="text"
                        data-scroll 
                        data-scroll-speed="2"
                        is-inview="anim-text"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                    >
                    </h2>
                    </div>
                </div>
            </div>
            <Hero img={project.img} truncated={truncated} />
        </header>
    



  );

  export default ProjectHeader;