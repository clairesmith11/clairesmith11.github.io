import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Skills = (props) => (
    <Container id="skills" className="margin-bottom-lg">
        <Row>
            <Col md={7} className="d-flex flex-column justify-content-center">

            </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-5 text-center">
            <Col md={3} className="my-2">
                <FontAwesomeIcon className="skills-icon" icon={faCode} size="6x" />
                <h5 className="my-3">FRONT END</h5>
                <p>HTML5, CSS3, JavaScript, React, Redux, jQuery, Wordpress, Bootstrap, SASS, Gatsby, Responsive Design</p>
            </Col>
            <Col md={3} className="my-2">
                <FontAwesomeIcon className="skills-icon" icon={faServer} size="6x" />
                <h5 className="my-3">BACK END</h5>
                <p>Node.js, Express, MongoDB, REST APIs, PHP for Wordpress</p>
            </Col>
            <Col md={3} className="my-2">
                <FontAwesomeIcon className="skills-icon" icon={faCodeBranch} size="6x" />
                <h5 className="my-3">ENVIRONMENT</h5>
                <p>Git, Github, Heroku, NPM, VSCode</p>
            </Col>
        </Row>
        <hr />
    </Container>
);



export default Skills;