// getArticles.js
import { client } from "../client";

const getArticles = async () => {
  try {
    const articles = await client.fetch(`*[_type == "post"]{
      title,
      slug
    }`);
    console.log("Post Info: ", articles);
    return articles;
  } catch (err) {
    console.log(err);
    throw err; // Rethrow the error to be caught by the calling code if needed
  }
};

export default getArticles;




// import React from 'react';
// import SanityClient from '../client';

// const getArticles = () => {
//     SanityClient
//         .fetch(`*[_type == "post"]{
//             title,
//             slug
//         }`)
//         .then(res => {
//             console.log("Post Info: ", res);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };

// export default getArticles;