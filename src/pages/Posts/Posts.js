import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import * as head from '../../common/HeaderConstant'
import Header from '../../components/Header/Header'
import PostList from '../../components/PostList/PostList'

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then((response) => {
                setPosts(response.data)
            })
    }, [])
    
    return (

        <div className="page-wrapper">

            <Header value={head.posts} />

            <Container>
                <Row>
                    <Col className="col-lg-8 col-md-10 mx-auto">
                        {/* <PostList
                            posts={posts}
                        /> */}
                        {posts && <PostList posts={posts} />}

                    </Col>
                </Row>
            </Container>

        </div>

    )

}

export default Posts