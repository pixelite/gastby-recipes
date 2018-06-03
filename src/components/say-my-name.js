import React from 'react'
import { navigateTo } from 'gatsby-link'

class SayMyName extends React.Component {
  constructor() {
    super();
    this.addName = this.addName.bind(this);
  }

  addName(event) {
    event.preventDefault();
    console.log(this.firstName.value);

  }
  render() {
    return (
        <form onSubmit={this.addName}>
          <input type="text" placeholder="First Name" ref={(input) => { this.firstName = input}}/>
          <input type="text" placeholder="Last Name"/>
          <button type="submit">Say My Name</button>
        </form>
    )
  }
}

export default SayMyName
