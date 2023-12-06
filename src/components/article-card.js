import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './component-styles.css';
import FlagLogo from '../images/FlagLogo.png';

function ArticleCard() {
    return (
        <Card className='BaseCard'>
            <Card.Img src={FlagLogo} />
            <Card.Body>
                <Card.Title>Article Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Read More</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;