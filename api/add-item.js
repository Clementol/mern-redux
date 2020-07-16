const router = require('express').Router()
const Item = require('../models/item.model')


/**
 * @description create new item
 * @access Public  
*/
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
    .then((item) => res.status(200).json(item))
    .catch( err => res.status(400).json(`Error creating new Item ${err}`) )
} );

module.exports = router;
