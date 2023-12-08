import BaseCard from '../components/base-card';
import VerticalAd from '../components/vertical-ad';
import './screen-styles.css';

function HomePage() {
    return (
        <div className='home-page'>
            <div className='article-container'>
                <BaseCard
                    title={'Test 1'}
                    image={'images/logo.png'} 
                    author={'Richard Allen'}
                    />
                <BaseCard 
                    title={'Test 2'} 
                    image={'images/rico-24.JPG'}/>
                <BaseCard title={'Test 3'} image={'images/logo.png'}/>
                <BaseCard title={'Test 4'} image={'images/logo.png'}/>
                <BaseCard title={'Test 5'} image={'images/logo.png'}/>
            </div>
            <div className='ad-container'>
                <VerticalAd/>
            </div>
        </div>
    );
}

export default HomePage;