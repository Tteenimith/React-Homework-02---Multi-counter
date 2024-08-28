
function App() {
    const [counters, setCounters] = React.useState([
        { id: 1, number: 0 },
        
    ])
    const sum = counters.reduce((prev,curr)=>{
        return prev + curr.number
    },0)
    const updateCounter = (id,n) => {
        console.log('id=', id)
        let idx = counters.findIndex(el => el.id === id)
        // console.log('counters array no.', idx)
        const newCounters = [...counters]
        if(newCounters[idx].number + n < 0 ){
            return
        }
        else{
            newCounters[idx].number += n
        }
        setCounters(newCounters)
    }


    const deleteCounter =(id)=>{
        setCounters(prev=>prev.filter(el=> el.id !== id))
    }

    const addCounter = ()=>{
        setCounters([...counters, {id: counters.length + 1, number: 0}])
    }
    
    return (
        <div className='app'>
            <h1 >Sum = {sum} </h1>
            <button onClick={() => addCounter()}>Add Counter</button>

            <hr />
            {counters.map(el => (
                <Counter key={el.id} item={el} updateCounter={updateCounter} deleteCounter={deleteCounter} />

            ))
            }
        </div>
    )
}


////


function Counter(props) {
    // console.log(props)
    const { item, updateCounter , deleteCounter} = props
    return (

        <div className="counter">
            <button onClick={() => updateCounter(item.id,-1)}>-</button>
            <h3 >{item.number}</h3>
            <button onClick={() => updateCounter(item.id,1)}>+</button>
            <button onClick={() => updateCounter(item.id,-item.number)}>C</button>
            <button onClick={() => deleteCounter(item.id)}>X</button>
        </div>


    )
}

/// Root

ReactDOM.createRoot(document.querySelector('.root'))
    .render(<App />)