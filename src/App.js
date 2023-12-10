import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/header-bar';
import FooterBar from './components/footer-bar';
import ArticleList from './components/article-list';
import VerticalAd from './components/vertical-ad';
import './styles/screen-styles.css';
import SingleArticle from './components/single-article';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <HeaderBar/>
        <div className='content-container'>
          <Routes>
            <Route path='/' element={<ArticleList filter={null}/>}/>
            <Route path='/home/' element={<ArticleList filter={null}/>}/>
            <Route path='/article/:slug' element={<SingleArticle/>}/>
            <Route path='/DLM/' element={<ArticleList filter={'Dirt Late Models'}/>}/>
            <Route path='/DSC/' element={<ArticleList filter={'Dirt Sprint Cars'}/>}/>
            <Route path='/NASCAR/' element={<ArticleList filter={'NASCAR'}/>}/>
            <Route path='/other/' element={<ArticleList filter={'Other'}/>}/>
          </Routes>
          <div  className='ad-container'>
            <VerticalAd/>
          </div>
        </div>
        <FooterBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
