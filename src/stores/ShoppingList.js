import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {


    @observable list = []
    @observable length


    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed


    }
    addItem = () => {
        // your code here
    }
    editItem = () => {
        // your code here
    }
    deleteItem = () => {
        // your code here
    }
}

