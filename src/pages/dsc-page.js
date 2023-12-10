import BaseCard from '../components/base-card';
// import VerticalAd from '../components/vertical-ad';
import '../styles/screen-styles.css';
import React, { useEffect, useState } from 'react';
import { client } from '../client';

const DSCPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "post" && categories[0]->title == "Dirt Sprint Cars"]{
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
                    />
                ))}
            </div>
            {/* <div className='ad-container'>
                <VerticalAd/>
            </div> */}
        </div>
    );
};

export default DSCPage;