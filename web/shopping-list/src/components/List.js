import { useState } from "react";

const List = () => {
  const [items, setItems] = useState([]);
  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }
  function onRemove(itemToRemove){
   const newItems = items.filter((item)=>{
    return item !== itemToRemove
   })
   setItems(newItems);
  }
  return (
    <div>
      <section>
        <form onSubmit={onSubmit}>
          <div>
            <h1>Items to buy</h1>
          </div>
          <div>
            <input type="text" placeholder="Add new item" name="item" required />
          </div>
          <div>
            <button>Add</button>
          </div>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item key={index} item={item} onRemove={onRemove}/>
          ))}
        </ul>
      </section>
    </div>
  );
};
function Item({item,onRemove}){
  return(
  <li>
  {item}
  <button className="btn" onClick={()=>onRemove(item)}>x</button>
  </li>

  )
}
export default List;
