import React from 'react';
import Image from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = ({ imageData, title, description, tools, siteUrl, codeUrl, projectNumber }) => {

    return (
        <Container id="projects" className="projects margin-bottom-lg">
            {projectNumber % 2 === 0 ?
                <Row className="my-5 mx-auto">
                    <Col md={6} className="my-3">
                        <Image fluid={imageData} alt={title} className="rounded shadow" />
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center align-items-end">
                        <h4 className="text-primary">{title}</h4>
                        <p>{description}</p>
                        <p className="text-muted">{tools}</p>
                        <Row>
                            <a target="blank" href={siteUrl} className="btn btn-primary mx-3">Visit Site</a>
                            <a target="blank" href={codeUrl} className="btn btn-secondary">View Code</a>
                        </Row>
                    </Col>
                </Row>
                :
                <Row className="my-5">
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <h4 className="text-primary">{title}</h4>
                        <p>{description}</p>
                        <p className="text-muted">{tools}</p>
                        <Row>
                            <a target="blank" href={siteUrl} className="btn btn-primary mx-3">Visit Site</a>
                            <a target="blank" href={codeUrl} className="btn btn-secondary">View Code</a>
                        </Row>
                    </Col>
                    <Col md={6} className="my-3">
                        <Image fluid={imageData} alt={title} className="rounded shadow" />
                    </Col>

                </Row>}
        </Container>
    );
};

export default Projects;
