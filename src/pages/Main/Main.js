import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update, categories } from '../../store/products/productSlice.js'

import './Main.css'

import Card from '../../components/Card/Card'

function Main() {
    const products = useSelector((state) => state.products.list)
    const cats = useSelector((state) => state.products.categories)
    const dispatch = useDispatch()
    const [category, setCat] = useState({ cat: 'none' })
    const [search, setSearchText] = useState({ text: '' })

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((result) => {
                dispatch(update(result))
            })

        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then((result) => {
                dispatch(categories(result))
            })
    }, [dispatch])

    function selected(value) {
        setCat({ cat: value })
    }

    function setSearch(ev) {
        setSearchText({ text: ev.target.value })
    }

    return (
        <div>
            <div className='shop'>
                <div className='toolbar'>
                    <select onChange={({ target: { value } }) => selected(value)}>
                        <option key='0' value="none">нет</option>
                        {cats.map((opt, index) => {
                            return <option key={index + 1} value={opt}>{opt}</option>
                        })
                        }
                    </select>
                    <input placeholder="поиск" type="text" onChange={setSearch} />
                </div>
                {
                    products
                        .filter((item) => {
                            if (category.cat === 'none') return true
                            return item.category === category.cat
                        })
                        .filter((item) => {
                            if (!search.text.length) {
                                return true
                            }
                            const srch = search.text.toLowerCase()
                            const title = item.title.toLowerCase()
                            return (title.indexOf(srch) !== -1)
                        })
                        .map((card, index) => {
                            return <Card key={index} card={card} />
                        })
                }
            </div>
        </div>
    )
}

export default Main