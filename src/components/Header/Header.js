import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/img/tomato.png'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt='Tomato Shop' />
                Tomato Shop
            </div>
            <div>
                <Link to="/">Магазин</Link>
            </div>
            <div>
                <Link to="/basket">Корзина</Link>
            </div>
            <div>
                <Link to="/feedback">Обратная связь</Link>
            </div>
        </div>
    )
}

export default Header