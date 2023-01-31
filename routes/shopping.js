const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const Item = require('../shoppings');

//1 get /items - should render a list of shopping items.
//[{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]
router.get('', (req, res, next) => {
    try{
        return res.json({items: Item.findAll()})
    }
    catch(e){
        return next(e)
    }
})

//2 post /items
router.post('', (req, res, next) => {
    //let's use try and catch again
    try{
        let newItem = new Item(req.body.name, req.body.price);
        return res.json({items: newItem});

    }   catch(e){
        return next(e)
    }
})

//3 display a single item's name and price
router.get('/:name', (req, res, next) => {
    try{
        let getAnItem = Item.find(req.params.name);
    }   catch(e){
        return next(e)
    }
})

//4 patch a single item's name and price
router.patch('/:name', (req, res, next) => {
    try{
        let updateItem = Item.update(req.params.name, req.params.price);
        return res.json( {item:updateItem} )
    } catch(e){
        return next(e)
    }
})

//5 finally, delete an item 
router.delete('/:delete', (req,res,next) => {
    try{
        Item.remove(req.params.name);
        return res.json({msg : 'deleted an item'});
    } catch(e){
        return next (e)
    }
})

module.exports = router;