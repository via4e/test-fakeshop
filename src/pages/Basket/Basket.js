import { useSelector } from 'react-redux'
//import { useEffect, useState } from 'react'
import './Basket.css'

import BasketCard from '../../components/BasketCard/BasketCard'

function Basket() {
    const inbasket = useSelector((state) => state.basket)
    const products = useSelector((state) => state.products.list)

    const filtered = products.filter((item) => inbasket.includes(item.id))

    function order() {
        for (let i=0; i < filtered.length; i++) {
            console.log('Товар N:', i, 'Название', filtered[i].title )
        }
    }

    return (
        <div className='shop'>
            {
                filtered.length ?
                filtered.map((card, index) => {
                    return <BasketCard key={index} card={card} />
                }) :
                <div className='basket-text'>В корзине ничего нет</div>
            }
            <div style={{ width:'100%' }}>
                <button style={{ fontSize: '1.2em' }} onClick={order}>Оформить заказ</button>
            </div>

        </div>
    )
}

export default Basket