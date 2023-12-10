import BaseCard from './base-card';
import '../styles/screen-styles.css';
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
                <BaseCard 
                    key={post._id}
                    title={post.title}
                    image={post.mainImage ? post.mainImage.asset.url : null}
                    author={post.author.name}
                    slug={post.slug.current}/>
            ))}
        </div>
    );
};

export default ArticleList;