import React from 'react'

class ShoppingListCounter extends React.Component {
  render() {
    return (
      <div>Your list contains {this.props.count} items</div>
    )
  }
}

export default ShoppingListCounter
