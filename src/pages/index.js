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


// function checkVisible( elm, eval ) {
//   eval = eval || "object visible";
//   var viewportHeight = $(window).height(), // Viewport Height
//       scrolltop = $(window).scrollTop(), // Scroll Top
//       y = $(elm).offset().top,
//       elementHeight = $(elm).height();   

//   if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
//   if (eval == "above") return ((y < (viewportHeight + scrolltop)));
// }


// Scroll.on('call', func => {
//   if (checkVisible($('#my-hero'))) {
//       //do something when myID1 is in view
//       console.log("test myID1");
//   } else if (checkVisible($('#projects-container'))) {
//       //do something when myID2 is in view
//       console.log("test myID2");
//   } else {
//       // do nothing
//   }
// });

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

  const testEvent  = () => {
    console.log('fffsfdsf');
  };


  const projects = data.projects.edges;
  //const bg = projects[1].img.url;
  return (
    <BodyClassName className="about">
    <Layout>

        <SEO title="about" />

        <header className="c-hero--home" id="my-hero"
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


                    <h2 className="text"


                        dangerouslySetInnerHTML={{ __html: data.datoCmsHome.description }}
                    >
                    </h2>


                    {/* <MagneticButton {...settings}/> */}
                    </div>
                    
                    

                    <div class="o-content__text">
                      <h3 className="sub-text"
                      data-scroll 
                      data-scroll-speed="1"
                          dangerouslySetInnerHTML={{ __html: data.datoCmsHome.about }}
                          
                      >
                      </h3>
                    </div>
        
                    {/* <div class="services">
                    {data.datoCmsHome.services.map(service => (
                      <div>

                      <h3 className="sub-text">{service.title}</h3>
             
                     </div>
                    // <ProjectItem key={project.node.title} project={project.node} img={project.node.img.url} />
                    ))}  

                    </div>*/}

                </div>

 
            </div>

        </header>

{/* 
        <div class="let"
        >
          <div class="home-vid-mask-wrap blend-multiply pos-ab"> 
            <div class="img pos-ab" style={{backgroundImage: 'url('+data.datoCmsHome.services[0].image.url+')'}}></div>
              <div class="blend-screen home-video-mask pos-ab">
              <div class="let-t">
                <span class="h1">PUSH</span>
                <span class="blob"></span>
              </div>
              </div>    
            </div>  
        </div> */}
            
        <section className="c-block--services" id="call"
        >

          <div className="o-content">
           <div className="o-content__text">
              <ul class="services-list">
                {data.datoCmsHome.services.map((service, index) => (
                  <li id={service.title}>
                    {service.title != null && <h2
                  data-scroll
                  data-scroll-repeat="true"
                  data-scroll-offset="55%, 45%"
                  data-scroll-target={'#'+service.title}
                  className="masthead">{service.title}
                  </h2>}
                  </li>
                ))}
                </ul>
            </div>
            {data.datoCmsHome.heroImg != null &&
            <div class="img pos-ab"
                 style={{ backgroundImage: 'url(' + data.datoCmsHome.heroImg.url + ')' }}></div>
            }

           </div>

        </section>


{/*        <div id="projects-container"
                            data-scroll
                            data-scroll-repeat="true"
                            data-scroll-position="top"

                            data-scroll-call="test">
          {projects.map(project => (
            <ProjectItem key={project.node.title} project={project.node} img={project.node.img.url} />
          ))}
        </div>*/}

        {/* <script  src={withPrefix('demo.js')}  type="text/javascript" ></script>
        <script src={withPrefix('three.min.js')}  type="text/javascript" ></script>
        <script src={withPrefix('perlin.js')}  type="text/javascript" ></script>
        <script src={withPrefix('TweenMax.min.js')}  type="text/javascript" ></script>
        <script src={withPrefix('demo4.js')}  type="text/javascript" ></script>
        */}
         
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
