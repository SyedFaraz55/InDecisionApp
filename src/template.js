let count = 0
const addOne = () => {
    console.log('add One')
}
const minusOne = () => {
    console.log('minus One')
}

const reset = ()=> {
    console.log('reset !')
}


const template = <div>
    <h1>Count:{count}</h1>
    <button onClick={addOne} >+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
</div>

ReactDOM.render(template,document.getElementById('root'));