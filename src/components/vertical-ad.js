import Card from 'react-bootstrap/Card';
import './component-styles.css';

function VerticalAd() {
    return(
        <Card className='vertical-ad-card shadow'>
            <Card.Body>
                <Card.Title className='vertical-ad-title'>OUR SPONSORS</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default VerticalAd;