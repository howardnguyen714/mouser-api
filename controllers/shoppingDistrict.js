const db = require('../models');

const index = (req, res) => {
    db.ShoppingDistrict.find({}, (err, foundShoppingDistricts) => {
        if (err) console.log('Error in shoppingDistricts#index:', err);

        if (!foundShoppingDistricts) return res.json({ message: 'No shoppingDistricts found in DB' })

        // send the foundShoppingDistricts from the DB as an array of objects
        res.json({ shoppingDistricts: foundShoppingDistricts })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.ShoppingDistrict.findById(req.params.id, (err, foundShoppingDistrict) => {
        if (err) console.log('Error in shoppingDistricts#show:', err);

        // handle the case where a shoppingDistrict is not found
        if (!foundShoppingDistrict) return res.json({ message: "shoppingDistrict with that ID was not found." })

        // handle the response when the shoppingDistrict is found
        res.json({ shoppingDistrict: foundShoppingDistrict })
    });
};

const create = (req, res) => {
    db.ShoppingDistrict.create(req.body, (err, savedShoppingDistrict) => {
        if (err) console.log('Error in shoppingDistricts#create:', err);
        
        // return an updated list of shoppingDistricts, do this:
        // res.redirect('/api/v1/shoppingDistricts')
        res.json({ shoppingDistrict: savedShoppingDistrict })
    });
};

const update = (req, res) => {
    db.ShoppingDistrict.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedShoppingDistrict) => {
        if (err) console.log('Error in shoppingDistricts#update:', err);

        res.json({ shoppingDistrict: updatedShoppingDistrict });
    });
};

const destroy = (req, res) => {
    db.ShoppingDistrict.findByIdAndDelete(req.params.id, (err, deletedShoppingDistrict) => {
        if (err) console.log('Error in shoppingDistricts#destroy:', err);

        res.json({ message: "shoppingDistrict removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
