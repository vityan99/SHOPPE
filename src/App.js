import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Серьги",
          img: "card_1.png",
          desc: "Описание товара",
          catigory: "earrings",
          price: "49.99 ₽",
        },
        {
          id: 2,
          title: "Серьги 2",
          img: "card_2.png",
          desc: "Описание товара",
          catigory: "earrings",
          price: "149.99 ₽",
        },
        {
          id: 3,
          title: "Набор",
          img: "card_3.png",
          desc: "Описание товара",
          catigory: "jewelry sets",
          price: "299.99 ₽",
        },
        {
          id: 4,
          title: "Набор",
          img: "card_4.png",
          desc: "Описание товара",
          catigory: "jewelry sets",
          price: "299.99 ₽",
        },
        {
          id: 5,
          title: "Подвеска",
          img: "card_5.png",
          desc: "Описание товара",
          catigory: "pendant",
          price: "299.99 ₽",
        },
        {
          id: 6,
          title: "Заколка",
          img: "card_6.png",
          desc: "Описание товара",
          catigory: "hairpin",
          price: "299.99 ₽",
        },
      ],
      ShowFullItem: false,
      fullItem: {},
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategorie = this.chooseCategorie.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.addCount = this.addCount.bind(this); //
    this.removeCount = this.removeCount.bind(this);
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((order) => {
      if (order.id === item.id) isInArray = true;
    });

    if (!isInArray) {
      item.count = 1;
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  addCount(item) {
    this.setState((prevState) => {
      const updatedOrders = prevState.orders.map((order) => {
        if (order.id === item.id) {
          return { ...order, count: order.count + 1 };
        }
        return order;
      });

      return { orders: updatedOrders };
    });
  }

  removeCount(item) {
    this.setState((prevState) => {
      const updatedOrders = prevState.orders.map((order) => {
        if (order.id === item.id) {
          if (order.count > 1) {
            return { ...order, count: order.count - 1 };
          } else {
            this.deleteOrder(order.id);
          }
        }

        return order;
      });

      return { orders: updatedOrders };
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((item) => item.id !== id) });
  }

  chooseCategorie(categorie) {
    if (categorie === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((item) => item.catigory === categorie),
    });
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ ShowFullItem: !this.state.ShowFullItem });
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          addCount={this.addCount}
          showItemCount={this.showItemCount}
          removeCount={this.removeCount}
        />
        <Categories chooseCategorie={this.chooseCategorie} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.ShowFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
        <Footer />
      </div>
    );
  }
}

export default App;
