import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Projects from '../components/projects';
import Header from '../components/header';
import About from '../components/about';
import Footer from '../components/footer';

import './index.scss';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    headshot: file(relativePath: {eq: "me.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
    allProjectsJson {
      edges {
        node {
          codeUrl
          description
          id
          siteUrl
          title
          tools
          image {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  
  
  `);

  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      <Header />
      <About data={data} />
      {projects.map(({ node: project }, index) => {
        const { title, description, tools, siteUrl, codeUrl } = project;
        const imageData = project.image.childImageSharp.fluid;
        return (
          <Projects
            projectNumber={index}
            imageData={imageData}
            title={title}
            description={description}
            tools={tools}
            siteUrl={siteUrl}
            codeUrl={codeUrl}
          />
        );
      })}
      <Footer />
    </Layout>
  );
};

export default IndexPage;

