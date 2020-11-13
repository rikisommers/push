import React, {useEffect, useRef} from 'react'

import { withPrefix, graphql } from "gatsby"
import BodyClassName from "react-body-classname"

//import HeroTemp from "../components/hero-temp"

import Img from "gatsby-image";
import Footer from "../components/footer"
import { Box } from "rebass";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import AspectRatioBox from "../components/aspect-ratio-box";
import SEO from "../components/seo"
import gsap from "gsap"

import MagneticButton from "../components/magnetic-button"

// initialize custom cursor

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap:20px;
`;

const settings = {
	threshold: 40,
	ratio: 5,
	max: 100,
	scale: 1.2,
	ease: 0.14,
	label: 'Hover me.'
}


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


const ProjectItem = ({ project, img }) => {

 

  return (
    <AniLink
          fade
          style={{ textDecoration: "none", color:"black"}}
          to={`/projects/${project.slug}`}
          duration={1}>

            <section className="c-block" id={project.title}>

                <div class="project">

                    <div className="project__text">

                        <h3 className="sub-text"
                            data-scroll 
                            data-scroll-speed="1">
                            {project.title}
                        </h3>
                        <p className="text"
                          data-scroll 
                          data-scroll-speed="2">
                            {project.description}
                        </p>

                        <p className="tags"
                          data-scroll 
                          data-scroll-speed="2">
                          tagname tagname tagname
                        </p>
                        
                    </div>

                    <figure className="project__img" 
      
                   >
                        <div class="inner"

                             >
                          <AspectRatioBox ratio={5 / 8}>
                            <div className="fill">
                              <img
  
                                alt={project.title} 
                                key={project.img.src} 
                                src={project.img.url}
                                />
                              </div>
                          </AspectRatioBox>
                        </div>
                    </figure>

                </div>
            </section>

    </AniLink>
  );
};


const IndexPage = ({ data }) => {
  const projects = data.projects.edges;
  return (
    <BodyClassName className="about">
    <Layout>

        <SEO title="about" />

        <header className="c-hero--home"
        > 

            <div className="c-hero__content">
               
                <div className="o-content">
                    <div className="o-content__text">
                    <h1 className="sub-text"
                        data-scroll 
                        data-scroll-speed="1"
                        is-inview="anim-text"
                    >
                        {data.datoCmsHome.title }
                    </h1>
                    {/* <MagneticButton {...settings}/> */}
                    <h2 className="text"
                        data-scroll 
                        data-scroll-speed="2"
                        is-inview="anim-text"
                        dangerouslySetInnerHTML={{ __html: data.datoCmsHome.description }}
                    >
                    </h2>
                    </div>
                    <div class="services">
                    {data.datoCmsHome.services.map(service => (
                    <div>
                    <h3 className="sub-text">{service.title}</h3>
             
                    </div>
                    // <ProjectItem key={project.node.title} project={project.node} img={project.node.img.url} />
                    ))} 
                    </div>

                </div>

 
            </div>

        </header>

        {/* <div class="home-hero">
          <div class="home-hero__bg">
              {data.datoCmsHome.services.map(service => (
                <div>
                  <img src={service.image.url}/>
                </div>
                // <ProjectItem key={project.node.title} project={project.node} img={project.node.img.url} />
              ))} 
          </div>
        </div> */}

        <section className="c-block--text"
        >
          <div className="o-content">
            <div class="o-content__text">
              <h3 className="sub-text"
                  data-scroll 
                  data-scroll-speed="1"
                  dangerouslySetInnerHTML={{ __html: data.datoCmsHome.about }}
                  is-inview="anim-text"
              >
              </h3>
            </div>
          </div>
        </section>

        <div id="projects-container">
          {projects.map(project => (
            <ProjectItem key={project.node.title} project={project.node} img={project.node.img.url} />
          ))} 
        </div>

        {/* <script  src={withPrefix('demo.js')}  type="text/javascript" ></script>
        <script src={withPrefix('three.min.js')}  type="text/javascript" ></script>
        <script src={withPrefix('perlin.js')}  type="text/javascript" ></script>
        <script src={withPrefix('TweenMax.min.js')}  type="text/javascript" ></script>
        <script src={withPrefix('demo4.js')}  type="text/javascript" ></script>
        */}
            <Footer/>
    </Layout>
    </BodyClassName>
  );
};


export default IndexPage

export const query = graphql`
  query HomeQuery {
    datoCmsSite {
      name
    }
    datoCmsHome {
      title
      description
      about
      services {
        title
        image {
          alt
          url
        }
      }
    }
    projects: allDatoCmsProject {
    edges {
      node {
        title
        description
        img {
            url
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              src
            }
        }
        slug

      }
    }
  }
  }
`
