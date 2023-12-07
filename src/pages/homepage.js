import ArticleCard from '../components/base-card';
import './screen-styles.css';

function HomePage() {
    return (
        <div className='HomePage'>
            <div className='article-container'>
                <ArticleCard 
                    title={'Test 1'}
                    image={'images/logo.png'} 
                    author={'Richard Allen'}
                    />
                <ArticleCard title={'Test 2'} image={'images/logo.png'}/>
                <ArticleCard title={'Test 3'} image={'images/logo.png'}/>
                <ArticleCard title={'Test 4'} image={'images/logo.png'}/>
                <ArticleCard title={'Test 5'} image={'images/logo.png'}/>
            </div>
        </div>
    );
}

export default HomePage;