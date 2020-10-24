import React from "react"
import { Link, graphql } from "gatsby"

//import HeroTemp from "../components/hero-temp"

import Img from "gatsby-image";
import { Box } from "rebass";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Hero from "../components/hero"
import Capture from "../components/capture"
import Helmet from 'react-helmet'
import CanyonImg from "../img/canyon.jpg"

import Layout from "../components/layout"
import AspectRatioBox from "../components/aspect-ratio-box";


const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap:20px;
`;


const ProjectGridItem = ({ project }) => {
  return (
    <AniLink
      style={{ textDecoration: "none" }}
      fade
      to={`/projects/${project.slug}`}
      duration={0.2}>

        <Img fluid={project.img.fluid} />
        <Box as="h4" mv={[1,2]}>{project.title}</Box>

    </AniLink>
  );
};


const ProjectItem = ({ project }) => {
  return (
    <AniLink
          fade
          style={{ textDecoration: "none", color:"black"}}
          to={`/projects/${project.slug}`}
          duration={1}>

            <section className="project">

              <div className="project__content">
                <h3>
                {project.title}
                </h3>
                <p>
                {project.description}
                </p>
              </div>

              <figure className="project__img">
       
                  <AspectRatioBox ratio={8 / 5}>
                    <Img 
                      alt={project.title} 
                      key={project.img.src} 
                      fluid={project.img.fluid.src}
                      className="fill" />
                  </AspectRatioBox>
      
              </figure>

          </section>

    </AniLink>
  );
};


const IndexPage = ({ data }) => {
  const projects = data.projects.edges;
  return (
    <Layout>

      <header className="o-banner c-hero"> 

        <div class="o-content services">

          <div class="intro">
            <h4 id="sub-title">{data.datoCmsAbout.title }</h4>
            { data.datoCmsAbout.description }
          </div>

          <div class="g-3">
            <div> 
              { data.datoCmsAbout.services }
            </div>
            <div>
              { data.datoCmsAbout.socialservices }
            </div>
            <div>
              { data.datoCmsAbout.miscservices }
            </div>
          </div>

        </div>

      </header>
  

      {projects.map(project => (
        <ProjectItem key={project.node.title} project={project.node} />
      ))}

      <Capture/>


    </Layout>
  );
};


export default IndexPage

export const query = graphql`
  query AboutQuery {
    datoCmsSite {
      name
    }
    datoCmsAbout {
      title
      description
    }
    datoCmsHome {
      title
      description
    }
    projects: allDatoCmsProject {
    edges {
      node {
        title
        description
        slug
          img {
            url
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              src
            }
          }
      }
    }
  }
  }
`
