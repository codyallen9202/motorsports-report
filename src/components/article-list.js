import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import React, { useEffect, useState } from 'react';
import { client } from '../client';
import { Button } from 'react-bootstrap';

export default function ArticleList({ filter }) {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;

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

    // Calculate the index range for the current page
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = posts.slice(indexOfFirstArticle, indexOfLastArticle);

    // Handle pagination
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div>
            <div className='article-list'>
                {currentArticles && currentArticles.map(post => (
                    <Link className='text-decoration-none' to={'/article/' + post.slug.current} key={post.slug.current}>
                        <Card className='base-card' key={post._id}>
                            {post.mainImage
                                ? <Card.Img className='base-card-img' src={post.mainImage.asset.url}/>
                                : null}
                            <Card.Body>
                                {post.title
                                    ? <Card.Title as={'h2'}>{post.title}</Card.Title>
                                    : <Card.Title as={'h2'}>Untitled</Card.Title>}
                                {post.author
                                    ? <Card.Text className='base-card-author'>{post.author.name}</Card.Text>
                                    : null}
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
            <div className='pagination'>
                    <Button 
                        variant='danger' 
                        size='sm' 
                        className='page-button' 
                        onClick={handlePrevPage} 
                        disabled={currentPage === 1}>
                            Previous Page
                        </Button>
                    <Button 
                        variant='danger' 
                        size='sm' 
                        className='page-button' 
                        onClick={handleNextPage} 
                        disabled={indexOfLastArticle >= posts.length}>
                            Next Page
                        </Button>
            </div>
        </div>
    );
};