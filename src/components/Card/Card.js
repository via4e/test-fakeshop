import { click } from '@testing-library/user-event/dist/click';
import React from "react";
import ReactDOM from "react-dom";
import './Card.css'

function Card(props) {
    //const title = this.props.card.title
    console.log('--',props)
    function add() {
        console.log('ev', props.card.id)
    }

    return (
        <div className = 'Card'>
            <div className='Card-title'>{ props.card.title }</div>
            <img src={props.card.image} className='Card-image' alt={props.card.title} />
            <div className='Card-price'>{props.card.price}$</div>
            <div className='Card-button'>
                <button onClick={add}>Добавить</button>
            </div>
        </div>
    )
}

export default Card