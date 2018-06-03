import React from 'react'

class ShoppingItem extends React.Component {
  render() {
    const { name, quantity, index } = this.props;
    return (
      <li>
      {name}, {quantity}<button className="remove-item" onClick={() => this.props.removeItem(this.props.index)}>Remove</button>
      </li>
    )
  }
}
export default ShoppingItem
