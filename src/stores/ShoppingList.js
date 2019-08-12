import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {


    @observable list = []
    @observable length


    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed


    }
    @action addItem = (name) => {
       this.list.push(new Item(name))
    }
    editItem = () => {
        // your code here
    }
    deleteItem = () => {
        // your code here
    }
}

