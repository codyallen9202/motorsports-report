import ArticleCard from "../components/article-card";

function ArticlePage() {
    return (
        <div className='article-container'>
            <ArticleCard
                title={'Adding Abreu takes big Sprint Car name off the board in favor of High Limit'}
                image={'images/rico-24.JPG'} 
                author={'Richard Allen'}
            />
        </div>
    );
}

export default ArticlePage;