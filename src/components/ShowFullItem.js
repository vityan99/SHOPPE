import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
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
      </div>
    );
  }
}

export default ShowFullItem;
