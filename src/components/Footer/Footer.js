import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

    return (

        <footer>

            <Container>
                <Row>
                    <Col className="mx-auto col-lg-8 col-md-10">
                        <ul className="social-button__list list-inline text-center">

                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/ndaiduong" className="fa fa-facebook">
                                    {/* Empty for screen reader ? */}
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/oceanoppa" className="fa fa-instagram">
                                    {/* Empty for screen reader ? */}
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a href="https://github.com/oceannguyen" className="fa fa-github">
                                    {/* Empty for screen reader ? */}
                                </a>
                            </li>

                        </ul>

                        <p className="copyright text-muted">Copyright © Ocean Nguyen 2019</p>

                    </Col>
                </Row>
            </Container>

        </footer>

    )

}

export default Footer