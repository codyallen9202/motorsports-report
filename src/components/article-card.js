import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './component-styles.css';

function ArticleCard({ title, image, author, date  }) {
    return (
        <Card className='BaseCard'>
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title as={'h2'}>{title}</Card.Title>
                <Card.Text className='author-tag'>{author}</Card.Text>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant='danger'>Read More</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;