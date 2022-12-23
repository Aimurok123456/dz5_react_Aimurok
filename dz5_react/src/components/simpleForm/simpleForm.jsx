import style from './simpleForm.module.css'
// import { useState } from 'react'
import { render } from 'react-dom'
import React from 'react'


// function SimpleForm() {
//     const [surname, setSurname] = useState('')
//     const [name, setName] = useState('')
//     const [age, setAge] = useState('1')
//     const [checked, setChecked] = useState(false)


//     const putSubmit = (e) => {
//         e.preventDefault
//     }
//     return (
//         <div className="container">
//             <div className={style.register}>
//                 <form action="" className={style.simpleForm} onSubmit={putSubmit}>
//                     <h2>Регистрация</h2>
//                     <label>Фамилия:
//                         <input
//                             className={style.name}
//                             type="text"
//                             name='firstname'
//                             disabled={checked}
//                             placeholder='Введите фамилию'
//                             onChange={(e) => setSurname(e.target)}

//                         />
//                     </label>
//                     <label >Имя:
//                         <input
//                             className={style.name}
//                             type="text"
//                             name='firstname'
//                             disabled={checked}
//                             placeholder='Введите имя'
//                             onChange={(e) => setName(e.target)}

//                         />
//                     </label>
//                     <label> Возраст:
//                         <input
//                             className={style.age}
//                             type="number"
//                             name="age" min={1} max={120}
//                             disabled={checked}
//                             onChange={(e) => setAge(e.target.value)}
//                         />
//                     </label>
//                     <label>

//                         <input
//                             className={style.checkbox}
//                             id="checkbox"
//                             type="checkbox"
//                             name="checkbox"
//                             onChange={(e) => setChecked(!checked)} />

//                         <div>Настоящим подтверждаю, что я согласен(-сна)</div>
//                         < input
//                             type="submit"
//                             name="submit"
//                             disabled={!checked}
//                             value="Отправить"
//                         />

//                     </label>
//                 </form>

//             </div>
//         </div>
//     )
// }
class SimpleForm extends React.Component {
    constructor() {
        super()
        this.state = {
            surname: '',
            name: '',
            age: 1,
            checked: false
      
        }

        this.changeSurname = this.changeSurname.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changeChecked = this.changeChecked.bind(this)
    
    }

    changeSurname = () => {
        this.setState({ surname: e.target.value })
    }
    changeName = () => {
        this.setState({ name: e.target.value })
    }
    changeAge = () => {
        this.setState({ age: e.target.value })
    }
    changeChecked = () => {
        this.setState({ checked: !this.state.checked })
    }
   

    render() {
        return (
            <div className="container">
                <div className={style.register}>
                    <form action="" className={style.simpleForm}>
                        <h2>Регистрация</h2>
                        <label>Фамилия:
                            <input
                                className={style.name}
                                type="text"
                                name='firstname'
                                disabled={this.state.checked}
                                placeholder='Введите фамилию'
                                onChange={this.changeSurname}

                            />
                        </label>
                        <label >Имя:
                            <input
                                className={style.name}
                                type="text"
                                name='firstname'
                                disabled={this.state.checked}
                                placeholder='Введите имя'
                                onChange={this.changeName}

                            />
                        </label>
                        <label> Возраст:
                            <input
                                className={style.age}
                                type="number"
                                name="age" min={1} max={120}
                                disabled={this.state.checked}
                                onChange={this.changeAge}
                            />
                        </label>
                        <label>
                            <input
                                className={style.checkbox}
                                id="checkbox"
                                type="checkbox"
                                name="checkbox"
                                onChange={this.changeChecked } />
                                

                            <div>Настоящим подтверждаю, что я согласен(-сна)</div>
                            < input
                                type="submit"
                                name="submit"
                                disabled={!this.state.checked}
                                value="Отправить"
                            />

                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default SimpleForm