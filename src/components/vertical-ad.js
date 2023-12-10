import Card from 'react-bootstrap/Card';
import '../styles/styles.css';

function VerticalAd() {
    return(
        <Card className='vertical-ad-card'>
            <Card.Body>
                <Card.Title className='vertical-ad-title'>OUR SPONSORS</Card.Title>
                <Card.Body>
                    <div className='single-ad'>
                        <Card.Img src='/images/hf-logo.jpg'/>
                    </div>
                    <div className='single-ad'>
                        <Card.Text>Want to advertise with us?</Card.Text>
                        <Card.Text><a href='mailto:motorsportsreportnet@gmail.com'>Contact Us</a></Card.Text>
                    </div>
                </Card.Body>
            </Card.Body>
        </Card>
    );
}

export default VerticalAd;