import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (b) => {
    this.props.store.editItem(this.props.item.name ,b.target.value)
  }
  deleteItem = () => {
    //your code here
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}><input type="checkbox" onClick={this.checkItem}
        value={item.name} />
        <span>{item.name} </span>
        <span> {item.location}</span>
        <button onClick={this.editItem}>Edit</button>
      </div>)
  }
}

export default Item