import React from "react";
import { Link } from 'react-router-dom';
import './Card.css'
import { useDispatch } from 'react-redux'
import { add } from '../../store/products/basketSlice.js'

function Card(props) {
    const dispatch = useDispatch()

    function toBasket() {
        dispatch(add(props.card.id))
    }

    return (
        <div className='Card'>
            <Link to={`/products/${props.card.id}`}>
                <div className='Card-title'>{props.card.title}</div>
                <img src={props.card.image} className='Card-image' alt={props.card.title} />
                <div className='Card-price'><b>{props.card.price}$</b></div>
            </Link>
            <div className='Card-button'>
                <button onClick={toBasket}>Добавить</button>
            </div>
        </div>
    )
}

export default Card