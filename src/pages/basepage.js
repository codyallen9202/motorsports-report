import TopBar from '../components/top-bar';
import FooterBar from '../components/footer-bar';
import './screen-styles.css';

function BasePage() {
    return (
        <div className='base-page'>
            <div className='page-header'>
                <TopBar/>
            </div>
            <div className='page-footer'>
                <FooterBar/>
            </div>
        </div>
    );
}

export default BasePage