import BaseCard from '../components/base-card';
// import VerticalAd from '../components/vertical-ad';
import '../styles/screen-styles.css';
import React, { useEffect, useState } from 'react';
import { client } from '../client';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "post"]{
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
                    body[0]{
                        children[0]{
                            text
                        }
                    }
                }`
            )
            .then((data) => setPosts(data))
            .catch(console.error);
    }, []);

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