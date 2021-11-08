import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import * as head from '../../common/HeaderConstant'
import Header from '../../components/Header/Header';
import PostContent from '../../components/PostDetail/PostDetail'

const PostDetail = () => {

    return (

        <div className="page-wrapper">

            {/* Curly braces? */}

            <Header value={head.posts} />

            <Container>
                <Row>
                    <Col className="content-wrapper col-lg-8 col-md-10 mx-auto">

                        <PostContent />

                    </Col>
                </Row>
            </Container>

        </div>

    )

}

export default PostDetail;