import React from "react"
import BodyClassName from "react-body-classname"
import {  withPrefix, graphql } from "gatsby"
import Capture from "../components/capture"



import Layout from "../components/layout"

const ContectPage = ({data}) => (
  <BodyClassName className="contact">
  <Layout>
      
        <header className="c-hero">
            <div className="o-content">
    

                <div class="cl">
                  <div class="cl__left">
                      <h1 className="text">{data.datoCmsContact.title}</h1>
                      <div className="sub-text"
                          dangerouslySetInnerHTML={{ __html: data.datoCmsContact.description }} />

                  </div>
                  <div class="cl__right">
                    <Capture/>
                  </div>
                </div>


            </div>

        </header>



  </Layout>
  </BodyClassName>
)

export default ContectPage

export const query = graphql`
  query ContactQuery {
    datoCmsContact {
      title
      description
    }
  }
`
