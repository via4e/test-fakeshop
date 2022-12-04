import React from "react";
import { useParams } from 'react-router-dom';
import './ProductCard.css'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../../store/products/basketSlice.js'

function ProductCard() {
    const products = useSelector((state) => state.products.list)
    const dispatch = useDispatch()
    const { id } = useParams()
    const card = products.length ? products.find((item)=> item.id*1 === id*1) : null

    function toBasket() {
        dispatch(add(card.id))
    }

    return (
        <div className = 'pCard'>
            <div className='pCard-title'>{ card?.title }</div>
            <img src={card.image} className='pCard-image' alt={card.title} />
            <div className='description'>{ card.description }</div>
            <div className='pCard-price'><b>{card.price}$</b></div>
            <div className='pCard-button'>
                <button onClick={toBasket}>Добавить</button>
            </div>
        </div>
    )
}

export default ProductCard