import React from 'react'
import ShoppingListCounter from '../components/shopping-list-counter'
import ShoppingForm from '../components/shopping-form'
import ShoppingList from '../components/shopping-list'
import ShoppingItem from '../components/shopping-item'
import Tags from '../components/tags'

class ShoppingApp extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingItems: {},
      tags: [],
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addItem(item) {
    const shoppingItems = {...this.state.shoppingItems}
    shoppingItems[(Date.now())] = item;
    this.setState({shoppingItems});
  }
  removeItem(key) {
    const shoppingItems = {...this.state.shoppingItems};
    delete shoppingItems[key];
    this.setState({shoppingItems});
  }
  componentDidMount() {
    fetch('https://live-contentacms.pantheonsite.io/api/tags')
    .then(response => response.json())
    .then(data => this.setState({ tags: data.data }));
  }
  render() {
    return (
      <div>
        <ShoppingListCounter count={Object.keys(this.state.shoppingItems).length}/>
        <ShoppingForm addItem={this.addItem}/>
        <ShoppingList items={this.state.shoppingItems} removeItem={this.removeItem}/>
        <Tags tags={this.state.tags} />
      </div>
    )
  }
}

export default ShoppingApp
  const ITEMS = {
    1: {name: 'Kale', quantity: '5'},
    2: {name: 'Veggie Burgers', quantity: '10'},
    3: {name: 'Pineapple', quantity: '3'},
  };
