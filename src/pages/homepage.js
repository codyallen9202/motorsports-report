import BaseCard from '../components/base-card';
import VerticalAd from '../components/vertical-ad';
import './screen-styles.css';
import { getPosts } from '../client';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const fetchedPosts = await getPosts();
            setPosts(fetchedPosts);
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };

        fetchPosts();
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