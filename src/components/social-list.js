import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './component-styles.css';

function SocialList() {
    return(
        <Card className='SocialList'>
            <Button variant='dark'>Twitter</Button>
            <Button variant='danger'>YouTube</Button>
            <Button variant='primary'>Facebook</Button>
            <Button variant='info'>Instagram</Button>
        </Card>
    );
}

export default SocialList;