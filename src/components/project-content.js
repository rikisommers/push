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
    <Box my={4}>
     
          {project.images.map(({ fluid }) => {

            const withFixedAspectRatio = {
              ...fluid,
              aspectRatio: 8 / 5
            };

            return (
              <AspectRatioBox ratio={8 / 5}>
                  <div className="fill">
                  <Img 
                  alt={project.title} 
                  key={fluid.src} 
                  fluid={withFixedAspectRatio} 
                  />
                  </div>
              </AspectRatioBox>
            );
          })}
 
    </Box>
  );
};

export default ProjectContent;