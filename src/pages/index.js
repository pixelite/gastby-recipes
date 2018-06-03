import React from 'react'
import Link from 'gatsby-link'
import SayMyName from '../components/say-my-name'
import ShoppingApp from '../components/shopping-app'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <SayMyName/>
    <ShoppingApp/>
  </div>
)

export default IndexPage
