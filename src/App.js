import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/header-bar';
import FooterBar from './components/footer-bar';
import ArticleList from './components/article-list';
import VerticalSponsor from './components/vertical-ad';
import './styles/styles.css';
import SingleArticle from './components/single-article';
import NotFound from './components/not-found';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <HeaderBar/>
        <div className='content-container'>
          <div className='sp-container'>
            <VerticalSponsor/>
          </div>
          <div className='inner-content-container'>
          <Routes>
            <Route path='/' element={<ArticleList filter={null}/>}/>
            <Route path='/home/' element={<ArticleList filter={null}/>}/>
            <Route path='/article/:slug' element={<SingleArticle/>}/>
            <Route path='/DLM/' element={<ArticleList filter={'Dirt Late Models'}/>}/>
            <Route path='/DSC/' element={<ArticleList filter={'Dirt Sprint Cars'}/>}/>
            <Route path='/NASCAR/' element={<ArticleList filter={'NASCAR'}/>}/>
            <Route path='/photos/' element={<ArticleList filter={'Photos'}/>}/>
            <Route path='/other/' element={<ArticleList filter={'Other'}/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          </div>
          
        </div>
        <FooterBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
