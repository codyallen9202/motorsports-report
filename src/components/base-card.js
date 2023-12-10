import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../styles/component-styles.css';

function BaseCard({ title, image, author, slug, body }) {
    return (
        <Link className='text-decoration-none' to={'/article/' + slug} key={slug}>
            <Card className='base-card'>
                {image && <Card.Img className='base-card-img' src={image}/>}
                <Card.Body>
                    <Card.Title as={'h2'}>{title}</Card.Title>
                    <Card.Text className='base-card-author'>{author}</Card.Text>
                    <Card.Text>{body}</Card.Text>
                    {/* <Link to={'/article/' + slug} key={slug}><Button variant='danger'>Read More</Button></Link> */}
                </Card.Body>
            </Card>
        </Link>
    );
}

export default BaseCard;