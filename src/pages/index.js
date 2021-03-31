import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Projects from '../components/projects';
import Header from '../components/header';
import About from '../components/about';
import Skills from '../components/skills';

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
      <h1 className="main-headline text-center margin-bottom-md">ABOUT<span className="text-primary">ME</span></h1>
      <About data={data} />
      <h1 className="main-headline text-center margin-bottom-md">MY<span className="text-primary">SKILLS</span></h1>
      <Skills />
      <h1 className="main-headline text-center margin-bottom-md">MY<span className="text-primary">PROJECTS</span></h1>
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
    </Layout>
  );
};

export default IndexPage;

