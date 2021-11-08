import ItemCount from "../components/main/ItemCount";
import data from "../db/data";

const ItemListContainer = () => {
  return (
    <>
    {
      data.map((art) =>
        <figure key={art.id} className="card">
          <picture className="card__picture">
            <img src={art.thumbnail} alt={art.title} className="card__img"/>
          </picture>
          <h2 className="card__title">{art.title}</h2>
          <p className="card__price">${art.price} x U</p>
          <ItemCount stock={art.stock} initial={art.initial} id={art.id}/>
        </figure>
      )
    }
    </>
  )};
export default ItemListContainer;