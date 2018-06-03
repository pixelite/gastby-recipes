import React from 'react'
import ShoppingItem from '../components/shopping-item'

class ShoppingList extends React.Component {
  constructor() {
    super();
    this.removeShoppingItem = this.removeShoppingItem.bind(this);
  }
  removeShoppingItem(key) {
    this.props.removeItem(key);
  }
  render() {
    return (
     <div>
       <h2>Shopping List</h2>
       <ul>
         { 
           Object
             .keys(this.props.items)
             .map(key => <ShoppingItem name={this.props.items[key].name} quantity={this.props.items[key].quantity} key={key} index={key} removeItem={this.removeShoppingItem}/>)
         }
       </ul>
     </div>
   )
  }
}

export default ShoppingList
