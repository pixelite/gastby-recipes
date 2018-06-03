import React from 'react'

class ShoppingForm extends React.Component {
  constructor() {
    super();
    this.addShoppingItem = this.addShoppingItem.bind(this);
  }
  addShoppingItem(event) {
    event.preventDefault();
    const item = {
      name: this.name.value,
      quantity: this.quantity.value
    }
    this.props.addItem(item);
    this.form.reset();
  }
  render() {
    return (
      <form onSubmit={this.addShoppingItem} ref={(input) => this.form = input}>
        <input type="text" placeholder="Product Name" ref={(input) => {this.name = input}} />
        <input type="text" placeholder="Qty" size="3" ref={(input) => {this.quantity = input}} />
        <button type="submit">Add to List</button>
      </form>
    )
  }
}
export default ShoppingForm
