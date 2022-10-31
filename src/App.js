
import './App.css';

import {Provider} from 'react-redux'
import store from './reducer/store';
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './pages/Home';
import Header from './component/Header';
import Todos from './pages/Todos';
import Album from './pages/Album';
import Movie from './pages/Movie';
import Detail from './pages/Detail';


function App() {

  

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/todos' element={<Todos/>}/>
            <Route path='/album' element={<Album/>}/>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/:id' element={<Detail/>}/>
          </Routes>

      </BrowserRouter>
      

    </Provider>
    
  );
}

export default App;
