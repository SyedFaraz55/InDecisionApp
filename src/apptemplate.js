const app = {
    title:"Indecision App",
    subtitle:"Put your life in the hands of a computer",
    options:[]
}


const onFormSubmit = (event)=> {
    event.preventDefault();
    const option = event.target.elements.option.value;

    if(option) {
        app.options.push(option)
        event.target.elements.option.value = ''
        renderComponent()
    }
    
}

const removeAll = ()=> {
    app.options = [];
    renderComponent()
}

const onMakeDecision = ()=> {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber]
    alert(option)
}

const renderComponent = ()=> {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options':'No Options'}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What Should I Do ?</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
                {app.options.map((text,index)=> <li key={index}>{text}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" id="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template,document.getElementById('root'))
}
renderComponent()