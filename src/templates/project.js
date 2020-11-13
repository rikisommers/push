import React from "react";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import posed from "react-pose";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProjectHeader from "../components/project-header";
import ProjectContent from "../components/project-content";
import NextProjectHeading from "../components/next-project-heading";
import {TweenLite, CSSPlugin, ScrollToPlugin} from "gsap/all";
import { HelmetDatoCms } from 'gatsby-source-datocms'
import BodyClassName from "react-body-classname"
import SEO from "../components/seo"

const TRANSITION_LENGTH = 1.5;

const FadingContent = posed.div({
  exiting: { opacity: 0 }
});

const SlidingHeader = posed.div({
  exiting: {
    y: ({ element }) => {
      const navbar = document.querySelector("header");
      const distanceToTop =
        element.getBoundingClientRect().top;
      return distanceToTop * -1;
    },
    transition: {
      ease: [0.59, 0.01, 0.28, 1],
      delay: 250,
      duration: TRANSITION_LENGTH * 1000 - 250
    }
  }
});


const FadingNextProjectHeading = posed.div({
  exiting: { opacity: 0 }
});


const ProjectInner = ({ transitionStatus, project }) => {
 
  
  const nextProjectUrl = `/projects/${project.next.slug}`;
  const shouldTruncate = ["entering", "entered"].includes(transitionStatus);

  
  const exitTransition = {
    length: TRANSITION_LENGTH, // Take 1.5 seconds to leave
    trigger: () => console.log('We are exiting'),
  }
  
  const entryTransition = {
    delay: TRANSITION_LENGTH, // Wait 1.5 seconds before entering
    trigger: () => console.log('We are entering'),
  }
  


  return (
    <BodyClassName className="cae-study">
            {/* <HelmetDatoCms seo={project.seoMetaTags} /> */}

 {/* <SEO title={project.title} /> */}
        <Layout >
       
  
       
          <ProjectHeader project={project} />
          <ProjectContent project={project} />
        
        <TransitionLink
          to={nextProjectUrl}
          // exit={exitTransition}
          // entry={entryTransition}
        >
          
            <NextProjectHeading />
         
         
            <ProjectHeader project={project.next} />
        
        </TransitionLink>

      </Layout>

    </BodyClassName>
  );
};

const Project = ({ pageContext: projectShell, data }) => {
  const { project, next } = data;
  const aggregateProject = {
    ...projectShell,
    ...project,
    next
  };

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <ProjectInner
          transitionStatus={transitionStatus}
          project={aggregateProject}
        />
      )}
    </TransitionState>
  );
  

};
export const query = graphql`
  query ($slug: String!, $nextSlug: String!) {
    project: datoCmsProject(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      description
      img{
        url
        fluid{
          ...GatsbyDatoCmsFluid
        }

      }
      images {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
    }
    next: datoCmsProject(slug: { eq: $nextSlug }) {
      title
      slug
      description
      img {
        url
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;

export default Project;