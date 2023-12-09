import BaseCard from '../components/base-card';
import VerticalAd from '../components/vertical-ad';
import './screen-styles.css';
import getArticles from '../functions/getArticles';
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
                        image={post.mainImage.asset.url}
                        author={post.author.name}
                        slug={post.slug.current}
                    />
                ))}


                {/* <BaseCard
                    title={'Test 1'}
                    image={'images/logo.png'} 
                    author={'Richard Allen'}
                    />
                <BaseCard 
                    title={'Test 2'} 
                    image={'images/rico-24.JPG'}/>
                <BaseCard title={'Test 3'} image={'images/logo.png'}/>
                <BaseCard title={'Test 4'} image={'images/logo.png'}/>
                <BaseCard title={'Test 5'} image={'images/logo.png'}/> */}
            </div>
            <div className='ad-container'>
                <VerticalAd/>
            </div>
        </div>
    );
};

export default HomePage;