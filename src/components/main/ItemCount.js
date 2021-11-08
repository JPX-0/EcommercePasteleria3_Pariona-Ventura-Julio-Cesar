import { useState } from "react";

const ItemCount = (props) => {
  const [item, setItem] = useState(props.initial);
  const [enStock, setEnStock] = useState(props.stock);
  if(enStock == 0) {
    const addToCar = document.getElementById(props.id);
    addToCar.style.pointerEvents = "none";
    addToCar.style.color = "red";
    addToCar.style.opacity = "0.5";
    console.log(`Ya no hay mas productos en Stock`);
  }
  const increment = () => {
    if(item < enStock) setItem(item + 1);
  }
  const decrement = () => {
    if(item > props.initial) setItem(item - 1);
  }
  const onAdd = () => {
    if(item < enStock || item == enStock) {
      console.log(`Se agrego al carrito ${item} productos`);
      setEnStock(enStock - item);
    }
    if(item > enStock) {
      console.log(`La cantidad que desea comprar supera el numero de Stock`);
    }
  }
  return (
    <>
      <div className="card__buttons">
        <button onClick={decrement} className="btn btn__count">-</button>
        <p className="card__products">Productos: {item}</p>
        <button onClick={increment} className="btn btn__count">+</button>
      </div>
      <button onClick={onAdd} className="btn btn__addToCar" id={props.id}>Carrito +</button>
    </>
  )};
export default ItemCount;