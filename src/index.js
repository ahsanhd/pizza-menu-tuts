import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <main className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast react pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzasNum = 0;
  const pizzasNum = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {pizzasNum > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>;
            })}
          </ul>
        </>
      ) : (
        <p>
          We are working hard in kitchen so please visit us some later time.
        </p>
      )}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (props.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const time = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = time >= openHour && time <= closedHour;
  console.log(isOpen);
  // if (time >= 12 && time <= 22) alert("We are Open");
  // else alert("Sorry! We Are Closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order time={time} />
      ) : (
        <p>
          We are closed now. Please visit us between {openHour}:00 and{" "}
          {closedHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ time }) {
  return (
    <div className="order">
      <p>{time}:00. We're open. Come visit us or order online.</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

/// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
/// React Before v18

// ReactDOM.render(<App></App>,document.getElementById('root'))
