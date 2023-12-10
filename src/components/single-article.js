import SingleArticleCard from "./single-article-card";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { client } from "../client";

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

    return (
        <div className='article-container'>
            <SingleArticleCard
                title={singlePost.title ? singlePost.title : 'Error: Title Not Found'}
                image={singlePost.mainImage ? singlePost.mainImage.asset.url : null}
                author={singlePost.author ? singlePost.author.name : 'No Author Found'}
                date={singlePost.publishedAt ? dateFormat(singlePost.publishedAt) : 'Null'}
                tag={singlePost.categories ? singlePost.categories.title : 'Other'}
                body={singlePost.body ? singlePost.body : null}
            />
        </div>
    );
}

export default SingleArticle;