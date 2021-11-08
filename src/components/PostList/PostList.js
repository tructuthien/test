import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom'


const PostList = ({ posts }) => {

    return (

        <div className="post-card__list" style={{ marginBottom: "50px" }}>

            {/* public Solution */}
            {/* {posts.map((post) => ( */}

            {/* JSON-SERVER Solution */}
            {posts.map((post) => ( 

                <div className="post-card" key={post.id} >

                    <Link
                        to={`/posts/${post.id}`}
                    >

                        <Card
                            sx={{
                                maxWidth: '100%',
                                marginBottom: '30px'
                            }}
                        >

                            <CardContent>

                                <Typography
                                    sx={{ fontSize: 36 }}
                                    variant="body2"
                                    gutterBottom
                                >
                                    {post.heading}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: 26,
                                        mb: 1.5
                                    }}
                                    variant="body2">
                                    {post.subHeading}
                                </Typography>

                                <Typography
                                    sx={{ fontSize: 24 }}
                                    color="text.secondary">
                                    {post.meta}
                                </Typography>

                            </CardContent>

                        </Card>

                    </Link>

                </div>
            ))}

        </div>

    )

}

export default PostList