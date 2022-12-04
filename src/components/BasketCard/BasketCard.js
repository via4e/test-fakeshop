import React from "react";
import './BasketCard.css'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/products/basketSlice.js'

function Card(props) {
    const dispatch = useDispatch()

    function removeItem() {
        dispatch(remove(props.card.id))
    }

    return (
        <div className = 'Card'>
            <div className='Card-title'>{ props.card.title }</div>
            <img src={props.card.image} className='Card-image' alt={props.card.title} />
            <div className='Card-price'><b>{props.card.price}$</b></div>
            <div className='Card-button'>
                <button onClick={removeItem}>Убрать</button>
            </div>
        </div>
    )
}

export default Card