import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="img-wrapper">
          <img src={`./img/${this.props.item.img}`} alt="Фотография товара" onClick={() => this.props.onShowItem(this.props.item)} />
        </div>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <span>{this.props.item.price}</span>
        <div className="add-to-card" onClick={() => this.props.onAdd(this.props.item)}>
          +
        </div>
      </div>
    );
  }
}

export default Item;
