import { useEffect, useState } from 'react'
import './Main.css'

import Card from '../../components/Card/Card'

function Main() {
    const [ products, setProducts ] = useState([])

    useEffect(()=>{
       fetch('https://fakestoreapi.com/products')
         .then((response) => response.json())
         .then((result) => {
            setProducts(result)
        })
    },[])

    return (
        <div className='shop'>
            {
                products.map((card, index)=> {
                    return <Card key={index} card={card} />
                })    
            }
        </div>
    )
}

export default Main