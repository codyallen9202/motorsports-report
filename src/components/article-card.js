import Card from 'react-bootstrap/Card';
import SanityBlockContent from '@sanity/block-content-to-react';
import '../styles/component-styles.css';

function ArticleCard({ title, image, author, date, tag, body }) {
    return (
        <Card className='article-card'>
            <Card.Img className='article-card-img' src={image}/>
            <Card.Body>
                <Card.Title className='article-card-title'>{title}</Card.Title>
                <Card.Text className='article-card-author'>{author} | {date} | {tag}</Card.Text>
                <Card.Text>
                    <SanityBlockContent 
                        blocks={body}
                        projectId='xkb4ar5f'
                        dataset='production'
                        className='article-text'
                        />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;