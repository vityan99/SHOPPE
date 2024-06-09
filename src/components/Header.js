import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let total = 0;
  props.orders.forEach((item) => (total += Number.parseFloat(item.price) * item.count));

  return (
    <div>
      {props.orders.map((order) => (
        <Order onDelete={props.onDelete} key={order.id} item={order} addCount={props.addCount} removeCount={props.removeCount} />
      ))}
      <p className="total">Сумма: {new Intl.NumberFormat().format(total)} ₽</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товары отсутствуют</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">SHOPPE</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen((cartOpen = !cartOpen))} className={`shop-cart-button ${cartOpen && "active"}`} />

        {cartOpen && <div className="shop-cart">{props.orders.length > 0 ? showOrders(props) : showNothing()}</div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
