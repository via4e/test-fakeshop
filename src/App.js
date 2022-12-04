import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'

import Main from './pages/Main/Main';
import Basket from './pages/Basket/Basket'
import Feedback from './pages/Feedback/Feedback'
import ProductCard from './pages/ProductCard/ProductCard'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/basket'} element={<Basket />} />
        <Route path={'/feedback'} element={ <Feedback /> } />
        <Route path={'/products/:id'} element={ <ProductCard /> } />
      </Routes>
    </div>
  );
}

export default App;
