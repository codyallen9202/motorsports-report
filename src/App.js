import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/header-bar';
import FooterBar from './components/footer-bar';
import HomePage from './pages/homepage';
import ArticlePage from './pages/articlepage';
import './pages/screen-styles.css';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <HeaderBar/>
        <div className='content-container'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/articlepage' element={<ArticlePage/>}/>
          </Routes>
        </div>
        <FooterBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
