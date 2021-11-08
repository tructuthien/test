import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Col, Container, Row } from 'react-bootstrap'
import * as head from '../../common/HeaderConstant'
import Header from '../../components/Header/Header'
import PostList from '../../components/PostList/PostList'

import useFetch from '../../useFetch'

import './Home.css'

const Home = () => {

    // Local solution
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     fetch('data/dummydb.json')
    //       .then(res => {
    //         return res.json();
    //       })
    //       .then(data => {
    //         setPosts(data);
    //         console.log(data);
    //       })
    //   }, [])


    // JSON-SERVER solution
    const { data: posts, error, isLoading } = useFetch('http://localhost:3001/posts/');


    return (

        // Why not curly braces?

        <div className="page-wrapper">

            {/* Curly braces? */}

            <Header value={head.home} />

            <Container>
                <Row>
                    <Col className="content-wrapper col-lg-8 col-md-10 mx-auto">

                        {error && <div>{error}</div>}
                        {isLoading && <div>Loading...</div>}
                        {posts && <PostList posts={posts} />}

                        <Link to="/posts" >
                            <Button className="Button" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                                sx={{
                                    borderRadius: 0,
                                    float: 'right',
                                    backgroundColor: '#0085a1'
                                }}>
                                VIEW ALL POSTS
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </div>

    )

}

export default Home