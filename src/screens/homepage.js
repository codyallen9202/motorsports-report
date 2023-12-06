import TopBar from '../components/top-bar';
import ArticleCard from '../components/article-card';
import SocialList from '../components/social-list';
import './screen-styles.css';

function HomePage() {
    return (
        <div className='HomePage'>
            <div>
                <TopBar/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='ArticleList'>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </div>
            <div className='Social'>
                <SocialList/>
            </div>
        </div>
    );
}

export default HomePage;