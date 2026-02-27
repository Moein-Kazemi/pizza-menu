import Button from "./Button";
import Pizza from "./Pizza";

function Main({ pizzas }) {
  // React fragment
  return (
    <main className="main">
      <h2>welcome to pizza shop</h2>
      <ul className="pizzas">
        {pizzas.length > 0 &&
          pizzas.map((pizza) => <Pizza pizza={pizza} key={pizza.name} />)}
      </ul>
      <Button func={() => console.log("add")}>
        <span>add to cart</span>
      </Button>
      <Button func={() => console.log("delete")}>
        <span>delete from cart</span>
      </Button>
    </main>
  );
}

export default Main;
