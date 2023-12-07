import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './component-styles.css';

function BaseCard({ title, image, author }) {
    return (
        <Card className='base-card shadow'>
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title as={'h2'}>{title}</Card.Title>
                <Card.Text className='author-tag'>{author}</Card.Text>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant='danger' href='/articlepage'>Read More</Button>
            </Card.Body>
        </Card>
    );
}

export default BaseCard;