const db = require('../models');

const index = (req, res) => {
    db.Shop.find({}, (err, foundShops) => {
        if (err) console.log('Error in shops#index:', err);

        if (!foundShops) return res.json({ message: 'No shops found in DB' })

        // send the foundShops from the DB as an array of objects
        res.json({ shops: foundShops })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.Shop.findById(req.params.id, (err, foundShop) => {
        if (err) console.log('Error in shops#show:', err);

        // handle the case where a shop is not found
        if (!foundShop) return res.json({ message: "shop with that ID was not found." })

        // handle the response when the shop is found
        res.json({ shop: foundShop })
    });
};

const create = (req, res) => {
    db.Shop.create(req.body, (err, savedShop) => {
        if (err) console.log('Error in shops#create:', err);
        
        // return an updated list of shops, do this:
        // res.redirect('/api/v1/shops')
        res.json({ shop: savedShop })
    });
};

const update = (req, res) => {
    db.Shop.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedShop) => {
        if (err) console.log('Error in shops#update:', err);

        res.json({ shop: updatedShop });
    });
};

const destroy = (req, res) => {
    db.Shop.findByIdAndDelete(req.params.id, (err, deletedShop) => {
        if (err) console.log('Error in shops#destroy:', err);

        res.json({ message: "shop removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
