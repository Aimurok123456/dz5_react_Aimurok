// import { useState } from 'react';
// import styles from './counter.module.css'


// function Counter() {
//     const [count, setCount] = useState(0)

//     const incr = () => {
//         setCount(count + 1)
//     }

//     const decr = () => {
//         setCount(count - 1)
//     }

//     return (
//         <div className={styles.container}>
//             <button onClick={decr}>-</button>
//             <div className={styles.counter}>{count}</div>
//             <button onClick={incr}>+</button>
//         </div>
//     )
// }

// export default Counter;

import React from 'react'
import  {render}  from 'react-dom'


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.decr = this.decr.bind(this)
        this.incr = this.incr.bind(this)
    }

    incr = (e) => {
        this.setState((state) => { 
            return { count: state.count + 1 } 
        })
    }

    decr = (e) => {
        this.setState((state) => { return {count: state.count - 1 } })
    }
    render() {
        return (
            <div >
                <button onClick={this.decr}>-</button>
                <div >{this.state.count}</div>
                <button onClick={this.incr}>+</button>
            </div>
        )
    }

}
export default Counter
