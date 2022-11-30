import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'

import Main from './pages/Main/Main';
import Basket from './pages/Basket/Basket'
import Feedback from './pages/Feedback/Feedback'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/basket'} element={<Basket />} />
        <Route path={'/feedback'} element={ <Feedback /> } />
      </Routes>
    </div>
  );
}

export default App;
