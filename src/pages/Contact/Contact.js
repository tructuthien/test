import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as head from '../../common/HeaderConstant'
import ContactForm from '../../components/ContactForm/ContactForm'
import Header from '../../components/Header/Header'

const Contact = () => {
    return (

        <div className="page-wrapper">

            <Header value={head.contact} />

            <Container>
                <Row>
                    <Col className="col-lg-8 col-md-10 mx-auto">
                        <ContactForm />
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default Contact
