import ArticleCard from "../components/article-card";
import VerticalAd from "../components/vertical-ad";

function ArticlePage() {
    return (
        <div className='article-page'>
            <div className='article-container'>
                <ArticleCard
                    title={'Adding Abreu takes big Sprint Car name off the board in favor of High Limit'}
                    image={'images/rico-24.JPG'}
                    author={'Richard Allen'}
                    date={'December 6, 2023'}
                    tag={'Dirt Sprint Cars'}
                />
            </div>
            <div className='ad-container'>
                <VerticalAd/>
            </div>
        </div>
    );
}

export default ArticlePage;