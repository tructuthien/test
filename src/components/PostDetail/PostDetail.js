import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const PostDetail = () => {

    const { id } = useParams();

    const { data: post, error, isLoading } = useFetch('http://localhost:3001/posts/' + id);

    return (

        <div className="post-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {post && (
                <article>
                    <h2>{post.content.heading1}</h2>
                    <p>{post.content.para1}</p>
                    <h2>{post.content.heading2}</h2>
                    <p>{post.content.para2}</p>
                    <h2>{post.content.heading3}</h2>
                    <p>{post.content.para3}</p>
                </article>
            )}
        </div>
    );
        
}

export default PostDetail