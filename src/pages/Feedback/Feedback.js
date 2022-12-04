import { useState } from 'react'
import './Feedback.css'

function Feedback() {

    const [mail, setMail] = useState({ email: '' })
    const [name, setName] = useState({ name: '' })
    const [message, setMessage] = useState({ message: '' })
    const [check, setCheck] = useState({ check: '' })
    const [radio, setRadio] = useState({ radio: '' })


    function send() {
        const checkmail = /\S+@\S+\.\S+/.test(mail.email)
        if (!checkmail) {
            console.error("Неправильно указан email", checkmail)
            return
        }

        if(!name.name.length || !message.message.length) {
            console.error("Не указано имя или сообщение", !name.length, !message.length)
            return
        }
        console.warn('Отправка:')
        console.log('email:', mail.email)
        console.log('name:', name.name)
        console.log('message', message.message)
        console.log('check', check.check)
        console.log('radio', radio.radio)
    }
    
    function updateEmail(ev) {
        setMail({ email: ev.target.value })
    }

    function updateName(ev) {
        setName({ name: ev.target.value })
    }

    function updateText(ev) {
        setMessage({ message: ev.target.value })
    }    

    function updateChecked(ev) {
        setCheck({check: ev.target.checked})
    }

    function updateRadio(ev) {
        setRadio({ radio: ev.target.checked })
    }
    
    return (
        <div className='feedback'>
            <input name="email" placeholder="email" type="text" onChange={updateEmail} />
            <input name="name" placeholder="Имя" type="text" onChange={updateName} />
            <textarea name="message" placeholder="сообщение" type="text" onChange={updateText} />
            <div>
            <span><input name="check" placeholder="check" type="checkbox" onChange={updateChecked}/>Чекбокс</span>
            <span><input name="radio" placeholder="radio" type="radio" onChange={updateRadio} />Радикнопка</span>
            </div>
            <button onClick={send}>Отправить</button>
        </div>
    )
}

export default Feedback