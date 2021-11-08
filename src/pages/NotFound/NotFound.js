import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as head from '../../common/HeaderConstant'
import Header from '../../components/Header/Header'

import './NotFound.css'

const NotFound = () => {

    return (

        <div className="page-wrapper">

            {/* Curly braces? */}

            <Header value={head.home} />

            <Container>
                <Row>
                    <Col className="content-wrapper col-lg-8 col-md-10 mx-auto">

                        <div id="notfound">
                            <div className="notfound">
                                <h2>404 - Page not found</h2>
                                <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>

    )

}

export default NotFound