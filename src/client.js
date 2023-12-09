import { createClient } from "@sanity/client"

export const client = createClient({
    projectId: 'xkb4ar5f',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-12-08'
})

export async function getPosts() {
    const posts = await client.fetch(`*[_type == "post"]{
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
    }`)
    return posts
}