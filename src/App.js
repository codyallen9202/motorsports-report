import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/header-bar';
import FooterBar from './components/footer-bar';
import HomePage from './pages/homepage';
import ArticlePage from './pages/articlepage';
import DLMPage from './pages/dlm-page';
import DSCPage from './pages/dsc-page';
import NASCARPage from './pages/nascar-page';
import PLMPage from './pages/plm-page';
import './styles/screen-styles.css';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <HeaderBar/>
        <div className='content-container'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/home/' element={<HomePage/>}/>
            <Route path='/article/:slug' element={<ArticlePage/>}/>
            <Route path='/DLM/' element={<DLMPage/>}/>
            <Route path='/DSC/' element={<DSCPage/>}/>
            <Route path='/NASCAR/' element={<NASCARPage/>}/>
            <Route path='/PLM/' element={<PLMPage/>}/>
          </Routes>
        </div>
        <FooterBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
