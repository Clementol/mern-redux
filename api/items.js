const router = require('express').Router();
let Item = require('../models/item.model')

/**
 * @description get all items
 * @access public
*/
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.status(200).json(items))
    .catch(err => res.status(400).json('Error: ' + err))
} );
/**
 * @description delete an item
 * @access public
*/
router.delete('/delete-item/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then( () => res.json('Deleted') ))
    .catch(err => res.status(404).json('Not deleted: ' + err))
})


module.exports = router;
