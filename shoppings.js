const items = require('./fakeDb');

class Item{
    constructor(name, price){
        //render a list of shopping items
        this.name = name;
        this.price = price;
        //keep track of all items
        items.push(this);
    }
    static find(item){
        //to find and return an item
        const findAnItem = items.find(i => i.item === item);
        if(findAnItem === undefined){
            throw {msg: 'no item found', status: 400}
        }
        //otherwise, return the item
        return findAnItem
    }
    static update(item){
        //to update/patch an item
        const updateItem = Item.find(item);
        if(updateItem === undefined){
            throw {msg: 'no item found', status: 400}
        }
        //otherwise return the newly updated item
        updateItem.name = data.name;
        updateItem.price = data.price;
        return updateItem;
    }
    static remove(item){
        let removeItem = items.findIndex(i => i.item === item);
        if (removeItem === -1){
            throw {msg: 'no item found', status: 400}
        }
        //if found an item, just remove it using pop
        items.pop(removeItem, 1); 
    }
}





module.exports = Item;