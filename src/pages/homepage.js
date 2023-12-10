import BaseCard from '../components/base-card';
// import VerticalAd from '../components/vertical-ad';
import '../styles/screen-styles.css';
import React, { useEffect, useState } from 'react';
import { client } from '../client';

const HomePage = ({ filter }) => {
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
        <div className='home-page'>
            <div className='article-container'>
                {posts && posts.map(post => (
                    <BaseCard 
                        key={post._id}
                        title={post.title}
                        image={post.mainImage ? post.mainImage.asset.url : null}
                        author={post.author.name}
                        slug={post.slug.current}
                        // body={post.body.children.text}
                    />
                ))}
            </div>
            {/* <div className='ad-container'>
                <VerticalAd/>
            </div> */}
        </div>
    );
};

export default HomePage;