import Card from 'react-bootstrap/Card';
import '../styles/styles.css';

function VerticalSponsor() {
    return(
        <Card className='vertical-sp-card'>
            <Card.Body>
                <Card.Title className='vertical-sp-title'>OUR SPONSORS</Card.Title>
                <Card.Body>
                    <div className='single-sp'>
                        <a href='https://www.huckfinnsrestaurant.com/' target='_blank' rel='noreferrer'>
                            <Card.Img src='/images/hf-logo.jpg'/>
                        </a>
                    </div>
                    <div className='single-sp'>
                        <Card.Text>Want to advertise with us?</Card.Text>
                        <Card.Text><a href='mailto:motorsportsreportnet@gmail.com'>Contact Us</a></Card.Text>
                    </div>
                </Card.Body>
            </Card.Body>
        </Card>
    );
}

export default VerticalSponsor;