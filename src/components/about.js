import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby";
import Image from "gatsby-image";

import SocialIcons from './socialIcons';

const About = ({ data }) => {

  return (
    <Container id="about" className="full-height p-5 margin-xl">
      <Row>
        <Col md={7} className="d-flex flex-column justify-content-center">
          <div>
            <h5 className="mb-3">HELLO WORLD! I'M A SELF-TAUGHT WEB DEVELOPER</h5>
            <p>Aenean dapibus tortor orci, at facilisis nulla ultrices a. Nunc condimentum augue hendrerit posuere posuere. Nunc mattis auctor ex quis sollicitudin. Nullam vitae metus vitae neque fermentum scelerisque non vel enim. Phasellus facilisis pulvinar elit, sit amet consequat arcu ultrices vitae. Aliquam viverra dui vel ipsum tristique, quis congue felis imperdiet. Nam pellentesque dui faucibus velit dapibus semper. Etiam commodo enim vitae sagittis dignissim. Pellentesque pharetra sit amet enim vel congue. </p>
            <SocialIcons />
          </div>
        </Col>
        <Col md={5}>
          <Image fluid={data.headshot.childImageSharp.fluid} alt="Claire Smith" className="self-portrait rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
