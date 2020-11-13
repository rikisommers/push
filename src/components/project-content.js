import React from "react";
import { Box } from "rebass";
import styled from "styled-components";
import Img from "gatsby-image";

import AspectRatioBox from "./aspect-ratio-box";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ProjectContent = ({ project }) => {
  return (
    <section>
    
     

          
          {project.images.map(({ fluid }) => {

            const withFixedAspectRatio = {
              ...fluid,
              aspectRatio: 5 / 8
            };

            return (
              <div className="c-block">
                <div className="img">
                <AspectRatioBox ratio={5 / 8}>
                    <Img 
                    alt={project.title} 
                    key={fluid.src} 
                    fluid={withFixedAspectRatio} 
                    />
                </AspectRatioBox>
                </div>
              </div>
            );
          })}
      
      <div className="o-content">
        <div className="o-content__text">
          <p className="tags">
          {project.img.title}
          </p>
        </div>
      </div>
          
    </section>
  );
};

export default ProjectContent;