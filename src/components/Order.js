import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={`./img/${this.props.item.img}`} alt="Фотография товара" />
        <h2>{this.props.item.title}</h2>
        <span>{this.props.item.price}</span>
        <FaTrash className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)} />
        <div className="order-count">
          <button className="minus" onClick={() => this.props.removeCount(this.props.item)}>
            -
          </button>
          <span className="count">{this.props.item.count}</span>
          <button className="plus" onClick={() => this.props.addCount(this.props.item)}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Order;
