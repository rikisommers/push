import React, {useEffect, useRef} from 'react'

import { withPrefix, graphql } from "gatsby"
import BodyClassName from "react-body-classname"

//import HeroTemp from "../components/hero-temp"
import posed, { PoseGroup } from 'react-pose';

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

import { window, document, body, exists } from "browser-monads";

// initialize custom cursor

// var $body = $('body'),
// 	$panel = $('.panel'),
// 	$pContent = $('.panel__content'),
// 	$img = $('.panel__img-col');

// function initTilt() {
// 	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

// 	$body.mousemove(function(e) {
// 		tilt(e.pageX, e.pageY) 
// 	});
// };

// function tilt(cx, cy) {
// 	// var sxPos = cx / $panel.width() * 100 - 100;
// 	// var syPos = cy / $panel.height() * 100 - 100;
// 	var sxPos = (cx / $body.width()*100 - 50)*2 ;
// 	var syPos = (cy / $body.height()*100 - 50)*2;
// 	TweenMax.to($pContent, 2, {
// 		rotationY: -0.03 * sxPos,
// 		rotationX: 0.03 * syPos,
// 		transformPerspective: 500,
// 		transformOrigin: "center center -400",
// 		ease: Expo.easeOut
// 	});
// 	TweenMax.to($img, 2, {
// 		rotationY: -0.03 * sxPos,
// 		rotationX: 0.03 * syPos,
// 		transformPerspective: 500,
// 		transformOrigin: "center center -200",
// 		ease: Expo.easeOut
// 	});
// }

// $body.mouseleave(function() {
// 	tilt($body.width()/2, $body.height()/2);
// })

// initTilt();

// console.clear();



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


const Title = posed.div({
  enter: { y: 0, opacity: 1, delay: 3000 },
  exit: { y: 50, opacity: 0 }
});
const Intro = posed.div({
  enter: { y: 0, opacity: 1, delay: 3000 },
  exit: { y: 50, opacity: 0 }
});
const Bg = posed.div({
  enter: { y: 0, opacity: 1, delay: 3000 },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 200 }
  }
});

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

            <section className="c-block" id={project.title}>
                <div class="project">

                    <div className="project__text" data-scroll data-scroll-speed="1">

                        <h3 className="sub-text">
                            {project.title}
                        </h3>
                        <p className="text"
>
                            {project.description}
                        </p>

                        <p className="tags"
>
                          tagname tagname tagname
                        </p>

                        <AniLink
          paintDrip
          to={`/projects/${project.slug}`}
          duration={1}>
            Link
            </AniLink>  
                    </div>

                    <figure className="project__img" 
                       data-scroll
                        data-scroll-speed="0"
                   >
                        <div class="inner">
              
                            <div className="fill img"
                                                  data-scroll
                                                  data-scroll-speed="-2"

                            style={{backgroundImage: 'url('+project.img.url+')'}}
                                  >
                              {/* <img
  
                                alt={project.title} 
                                key={project.img.src} 
                                src={project.img.url}
                                /> */}
                              </div>
                    
                        </div>
                    </figure>

                </div>
            </section>

 
  );
};


const IndexPage = ({ data }) => {

  const projects = data.projects.edges;
  //const bg = projects[1].img.url;
  return (
    <BodyClassName className="home">
    <Layout>

        <SEO title="Push Digital" />

        <header className="c-hero--home"
                id="my-hero"
                // style={{ backgroundImage: 'url(' + data.datoCmsHome.heroImg.url + ')' }}
        >
            <div className="c-hero__content">
                <div className="o-content">
                    <div className="o-content__text-home"
                                      data-scroll 
                                      data-scroll-speed="1"
                                      >
{/* 
                    <Title key="title" 
                            className="sub-text"
                            data-scroll 
                            data-scroll-speed="1"
                            is-inview="anim-text"
                            >
                    {data.datoCmsHome.title }
                    </Title>

                    <Intro key="intro" 
                    className="text"
                    data-scroll 
                    data-scroll-speed="1"
                    is-inview="anim-text"
                    dangerouslySetInnerHTML={{ __html: data.datoCmsHome.description }}
                    >
           
                    </Intro> */}

                      {data.datoCmsHome.title != null && <h1 className="sub-text">{data.datoCmsHome.title }</h1>}
                      {data.datoCmsHome.description != null &&
                      <h2 className="text"
                          dangerouslySetInnerHTML={{ __html: data.datoCmsHome.description }}
                      >
                      </h2>
                      }
                    </div>
                    {data.datoCmsHome.about != null &&
                      <div class="o-content__text">
                        <h3 className="sub-text"
                            data-scroll
                            data-scroll-speed="1"
                            dangerouslySetInnerHTML={{ __html: data.datoCmsHome.about }}
                        >
                        </h3>
                      </div>
                    }
                </div>
            </div>
        </header>
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
      heroImg{
      alt
      url
      }
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
