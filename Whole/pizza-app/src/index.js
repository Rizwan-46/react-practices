import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "public/pizzas/pexels-ahmad-nawawi-2714722.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "public/pizzas/pexels-ahmad-nawawi-2714722.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "public/pizzas/pexels-ahmad-nawawi-2714722.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "public/pizzas/pexels-ahmad-nawawi-2714722.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "public/pizzas/pexels-ahmad-nawawi-2714722.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "public/pizzas/pexels-ahmad-nawawi-2714722.jpg",
    soldOut: false,
  },
];

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  console.log(numPizzas);
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're currently working on menu please wait</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name}></img>
      <div>
        <h1>{pizzaObject.name}</h1>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "Sold out" : pizzaObject.price}</span>
      </div>
    </li>
  );
}
function Header() {
  // const style = {color:"blue", fontSize:"100px",textAlign:"center", textTransform:"uppercase"};
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Footer() {
  const hours = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = hours >= open && hours <= close;
  console.log(isOpen);
  return (
    <div className="footer">
      {isOpen ? (
        <Order openHours={open} closeHours={close} />
      ) : (
        <p>
          We're close please visit us later. Please visit us between {open}:00
          to {close}:00{" "}
        </p>
      )}
    </div>
  );
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We're open untill {closeHours}:00. Come to visit us or or order online{" "}
      </p>
      <button className="btn ">Order Now</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
