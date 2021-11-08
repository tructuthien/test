import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';

//useParams here to fetch bgimg and headings content

const Header = (props) => {

    return (

        <header className="masterhead" style={{ backgroundImage: `url(${props.value.backgroundImg})` }}>
            <div className="overlay"></div>
            <Container>
                <Row>
                    <Col className="col-lg-8 col-md-10 mx-auto">
                        <div className="page-heading">
                            <h1>{props.value.heading}</h1>
                            <span>{props.value.subHeading}</span>
                            <span style={{fontSize: "18px", opacity: "0.7"}}>{props.value.subHeading2}</span>
                        </div>
                    </Col>
                </Row>
            </Container>

        </header>

    )

}

export default Header