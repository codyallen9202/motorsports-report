import Navbar from 'react-bootstrap/Navbar';

function FooterBar() {
    return (
        <Navbar className='footer-bar' bg='dark' data-bs-theme='dark'>
            <div className='social-container'>
                <Navbar.Brand href='https://instagram.com' target='_blank'>
                    <img
                        src='/images/instagram-logo.png'
                        alt='Instagram'
                        height={30}
                    />
                </Navbar.Brand>
                <Navbar.Brand href='https://www.facebook.com/people/Motorsports-Report/61553590751076/' target='_blank'>
                    <img
                        src='/images/facebook-logo.png'
                        alt='Facebook'
                        height={30}
                    />
                </Navbar.Brand>
                <Navbar.Brand href='https://youtube.com' target='_blank'>
                    <img
                        src='/images/youtube-logo.png'
                        alt='YouTube'
                        height={30}
                    />
                </Navbar.Brand>
                <Navbar.Brand href='https://twitter.com/MtrsportsReport' target='_blank'>
                    <img
                        src='/images/twitter-logo.png'
                        alt='Twitter'
                        height={30}
                    />
                </Navbar.Brand>
            </div>
            <div className='site-info'>
                <p>Website Created and Maintained by Cody Allen</p>
            </div>
        </Navbar>
    );
}

export default FooterBar;