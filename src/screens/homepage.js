import TopBar from '../components/top-bar';
import ArticleCard from '../components/article-card';
import FooterBar from '../components/footer-bar';
import './screen-styles.css';

function HomePage() {
    return (
        <div className='HomePage'>
            <div>
                <TopBar/>
            </div>
            <div className='article-container'>
                <ArticleCard 
                    title={'Test 1'}
                    image={'images/logo.png'} 
                    author={'Richard Allen'}
                    date={'2023-12-7'}
                    />
                <ArticleCard title={'Test 2'} image={'images/logo.png'}/>
                <ArticleCard title={'Test 3'} image={'images/logo.png'}/>
                <ArticleCard title={'Test 4'} image={'images/logo.png'}/>
                <ArticleCard title={'Test 5'} image={'images/logo.png'}/>
            </div>
            <div className='page-footer'>
                <FooterBar/>
            </div>
        </div>
    );
}

export default HomePage;