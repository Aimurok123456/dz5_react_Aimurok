// function SimpleForm() {
//     const [name, setName] = useState("")
//     const [age, setAge] = useState(0)
//     const [graduated, setGraduated] = useState(false)


//     return (
//         <div className={styles.container}>
//             <form className={styles.studentForm}>
//                 <label> Имя:
//                     <input
//                         onChange={(e) => setName(e.target.value)}
//                         type="text"
//                         name="firstName"
//                         placeholder="Введите имя студента"/>
//                 </label>
//                 <label> Возраст:
//                     <input
//                         onChange={(e) => setAge(e.target.value)}
//                         type="number"
//                         name="age" min={1} max={120} />
//                 </label>
//                 <label>Закончил(а) курсы: 
//                     <input
//                         onChange={(e) => setGraduated(e.target.checked)}
//                         type="checkbox" 
//                         name="grad"/>
//                 </label>
//             </form>
//             <div className="profile">
//                 <div>Имя: {name}</div>
//                 <div>Возраст: {age}</div>
//                 <div>Закончил(а) курсы: {graduated ? 'да' : 'нет'}</div>
//             </div>
//         </div>
//     )
// }

// export default SimpleForm;





// function Toggles() {
//     const [selected, setSelected] = useState('yes')
//     const [showText, setShowText] = useState(true)

//     return (
//         <div className={styles.container}>
//             <div>
//                 <button onClick={(e) => setShowText(!showText)}>Скрыть текст</button>
//                 { showText ? 
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima ipsam magnam consequatur! Dolorum quas laboriosam, inventore optio voluptas eos.</p> 
//                     : null }
//             </div>
//             <div>
//                 <div className={styles.question}>
//                     <span>Вы уверены что хотите закончить курсы?</span>
//                     <input
//                         type="radio"
//                         id="yes"
//                         name="choose"
//                         value="yes"
//                         checked={selected === 'yes'}
//                     />
//                     <label htmlFor="yes">Yes</label>

//                     <input
//                         type="radio"
//                         id="no"
//                         name="choose"
//                         value="no"
//                         checked={selected === 'no'}
//                     />
//                     <label htmlFor="no">No</label>

//                     <input
//                         type="radio"
//                         id="maybe"
//                         name="choose"
//                         value="maybe"
//                         checked={selected === 'maybe'}
//                     />
//                     <label htmlFor="maybe">Maybe</label>
//                 </div>
//             </div>
//         </div>
//     )
// }