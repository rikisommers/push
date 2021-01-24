import React,{ Component,useEffect, useRef } from "react"
import BodyClassName from "react-body-classname"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {  withPrefix, graphql } from "gatsby"

import { TweenMax, TimelineLite} from "gsap";
import Capture from "../components/capture"
class AboutPage extends Component  {
  // ... constructor and toggleMenu from above

  constructor(props){
    super(props);
  }
  

  // componentDidMount(){
  //   TweenMax.staggerFrom('.s1e1', 1, {y: 40, opacity: 0 , delay:0.3}, 1.3);
  //   TweenMax.staggerFrom('.s1e2', 1, {y: 40, opacity: 0 , delay:0.6}, 1.3);
  //   TweenMax.staggerFrom('.s2e1', 1, {y: 40, opacity: 0, delay:0.9}, 1.3);
  //   TweenMax.staggerFrom('.s2e2', 1, {y: 40, opacity: 0, delay:0.9}, 1.3);
  //   TweenMax.staggerFrom('.s2e2', 1, {y: 40, opacity: 0, delay:0.6}, 1.3);
  // }

  

  render() {
    const { data } = this.props;
    if ( this.props ) {
    return (
      <BodyClassName className="about">
      <Layout>
      <SEO title="about" />
        <header className="c-hero--sub">
          <div className="c-hero__content">
            <div className="o-content">
              <div className="o-content__text">
            
                <h1 className="text">
                  {data.datoCmsAbout.title}
                </h1>
                
                <div className="sub-text s1e2" 
                    ref={div => this.myElement = div}
                    dangerouslySetInnerHTML={{ __html: data.datoCmsAbout.description }} 
                />


              </div>
            </div>
            
          </div>
        </header>
    

        <main className="c-content-section">
            <section className="o-content">
              
              <h3 className="text">{data.datoCmsAbout.servicesTitle }</h3>
              <div className="g-3 services">
                <div className="tags s2e1" dangerouslySetInnerHTML={{ __html: data.datoCmsAbout.webservices }} />
                <div className="tags s2e2" dangerouslySetInnerHTML={{ __html: data.datoCmsAbout.socialservices }} />
                <div className="tags s2e3" dangerouslySetInnerHTML={{ __html: data.datoCmsAbout.miscservices }} />
              </div>

            </section>
        </main>

      </Layout>
      </BodyClassName>
    )
    }
  }
}

// const AboutPage = ({ data }) => (
//   <BodyClassName className="about">
//   <Layout>
//   <SEO title="about" />
//     <header className="o-banner c-hero">
//       <div class="o-content">

//         <div class="intro">
//           <h1>{this.props.datoCmsAbout.title}</h1>
//           <div dangerouslySetInnerHTML={{ __html: this.props.datoCmsAbout.description }} />
//         </div>

//        <section>

//             <h3>{data.datoCmsAbout.servicesTitle }</h3>
//             <div className="g-3 services">
//               <div dangerouslySetInnerHTML={{ __html: this.props.datoCmsAbout.webservices }} />
//               <div dangerouslySetInnerHTML={{ __html: this.props.datoCmsAbout.socialservices }} />
//               <div dangerouslySetInnerHTML={{ __html: dthis.props.datoCmsAbout.miscservices }} />
//             </div>

//         </section>

//       </div>
//     </header>

//   </Layout>
//   </BodyClassName>
// )

export default AboutPage



export const query = graphql`
  query AboutQuery {
    datoCmsAbout {
      title
      description
      servicesTitle
      webservices
      socialservices
      miscservices
    }
  }
`
