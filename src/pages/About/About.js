import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as head from '../../common/HeaderConstant'
import Header from '../../components/Header/Header'

const About = () => {

    return (
        <div className="page-wrapper">

            <Header value={head.about} />

            <Container>
                <Row>
                    <Col className="col-lg-8 col-md-10 mx-auto">
                        <p>Hello friends! I am Ocean Nguyen. Currently,
                            I'm working at an untitled large tech company as software engineer.
                            I love solving problems and developing myself that broaden my horizon about thousands of thing around the world.</p>
                        <p>This blog tries to intersect not only Day in a life of me as a software engineer but also Entertainment and Media.</p>
                        <p>Hopefully, it would be good for you. Feel free to give me feedback.</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )

}

export default About