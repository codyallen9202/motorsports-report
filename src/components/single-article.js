import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { client } from "../client";
import Card from 'react-bootstrap/Card';
import SanityBlockContent from '@sanity/block-content-to-react';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function dateFormat(dateString) {
    dateString = dateString.substring(0, 10);
    const dateParts = dateString.split('-');
    const month = parseInt(dateParts[1]) - 1;

    const formattedDate = monthNames[month]+' '+dateParts[2]+' '+dateParts[0]+' ';
    return formattedDate;
}

const SingleArticle = () => {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        client
            .fetch(
                `*[slug.current == "${slug}"]{
                    title,
                    _id,
                    slug,
                    mainImage{
                        asset->{
                            url,
                            _id
                        }
                    },
                    body,
                    author->{
                        name
                    },
                    publishedAt,
                    categories[0]->{
                        title
                    }
                }`
            )
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;

    const title=singlePost.title ? singlePost.title : 'Error: Title Not Found';
    const image=singlePost.mainImage ? singlePost.mainImage.asset.url : null;
    const author=singlePost.author ? singlePost.author.name : 'No Author Found';
    const date=singlePost.publishedAt ? dateFormat(singlePost.publishedAt) : 'Null';
    const tag=singlePost.categories ? singlePost.categories.title : 'Other';
    const body=singlePost.body ? singlePost.body : null;

    return (
        <Card className='single-article'>
            <Card.Img className='article-card-img' src={image}/>
            <Card.Body>
                <Card.Title className='article-card-title'>{title}</Card.Title>
                <Card.Text className='article-card-author'>{author} | {date} | {tag}</Card.Text>
                <Card.Text>
                    <SanityBlockContent 
                        blocks={body}
                        projectId='xkb4ar5f'
                        dataset='production'
                        className='article-body'
                        />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SingleArticle;