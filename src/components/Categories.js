import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Вcе",
        },
        {
          key: "earrings",
          name: "Серьги",
        },
        {
          key: "pendant",
          name: "Подвески",
        },
        {
          key: "hairpin",
          name: "Заколки",
        },
        {
          key: "jewelry sets",
          name: "Подарочные наборы",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((categorie) => (
          <div key={categorie.key} onClick={() => this.props.chooseCategorie(categorie.key)}>
            {categorie.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
