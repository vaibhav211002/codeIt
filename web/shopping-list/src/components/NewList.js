import {useState} from 'react'

const NewList = () => {
    const [items , setItems] = useState([])
    const [input , setInput] = useState('')
    const handleInput = (event) => {
      setInput(event.target.value)
    }
    const addItem = () => {
      if (input !== '') {
        setItems([...items, input]);
        setInput('');
      }
    }
    const removeItem = (index) => {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
    }
  return (
    <div>
        <section>
        <h1>Items to buy</h1>
        <input placeholder='Add New List' onChange={handleInput} value={input}/>
        <button onClick={addItem}>Add</button>
        <ul>
          {items.map((item,index)=>(
            <li key={index}>
              {item}
              <button onClick={()=>removeItem(index)} className='btn'>x</button>
            </li>
          ))}
        </ul>
        
      </section>
    </div>
  )
}

export default NewList