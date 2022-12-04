import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/img/flower.png'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt='Shop' />
                Магазинчик
            </div>
            <div>
                <Link to="/">Главная</Link>
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