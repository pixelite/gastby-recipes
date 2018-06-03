import React from 'react'

class Tags extends React.Component {
  render() {
    return (
      <div>
        <h2>Tags List</h2>
        <ul>
          {this.props.tags.map((tag) => 
            <li key={tag.id}>{tag.attributes.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Tags
