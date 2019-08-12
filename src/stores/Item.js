import { observable } from 'mobx'

export class Item {
    @observable name
    @observable location
    @observable completed = false
    constructor(name) {
        this.name = name
        this.location="Super Sell"
    }
}