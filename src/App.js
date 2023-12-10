import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/header-bar';
import FooterBar from './components/footer-bar';
import HomePage from './pages/homepage';
import ArticlePage from './pages/articlepage';
import './styles/screen-styles.css';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <HeaderBar/>
        <div className='content-container'>
          <Routes>
            <Route path='/' element={<HomePage filter={null}/>}/>
            <Route path='/home/' element={<HomePage filter={null}/>}/>
            <Route path='/article/:slug' element={<ArticlePage/>}/>
            <Route path='/DLM/' element={<HomePage filter={'Dirt Late Models'}/>}/>
            <Route path='/DSC/' element={<HomePage filter={'Dirt Sprint Cars'}/>}/>
            <Route path='/NASCAR/' element={<HomePage filter={'NASCAR'}/>}/>
            <Route path='/other/' element={<HomePage filter={'Other'}/>}/>
          </Routes>
        </div>
        <FooterBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
