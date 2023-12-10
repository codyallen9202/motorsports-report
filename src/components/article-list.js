import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import React, { useEffect, useState } from 'react';
import { client } from '../client';

const ArticleList = ({ filter }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("Filter:", filter);
        client
            .fetch(
                `*[_type == "post" && (!defined($filter) || categories[0]->title == $filter)]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    },
                    author->{
                        name
                    },
                }`,
                { filter }
            )
            .then((data) => setPosts(data))
            .catch(console.error);
    }, [filter]);

    return (
        <div className='article-list'>
            {posts && posts.map(post => (
                <Link className='text-decoration-none' to={'/article/' + post.slug.current} key={post.slug.current}>
                    <Card className='base-card'>
                        {post.mainImage.asset.url && <Card.Img className='base-card-img' src={post.mainImage.asset.url}/>}
                        <Card.Body>
                            <Card.Title as={'h2'}>{post.title}</Card.Title>
                            <Card.Text className='base-card-author'>{post.author.name}</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default ArticleList;