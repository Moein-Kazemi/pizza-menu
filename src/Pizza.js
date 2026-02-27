function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
    </li>
  );
}

export default Pizza;
