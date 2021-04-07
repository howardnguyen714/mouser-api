const db = require('../models');

const index = (req, res) => {
    db.Land.find({}, (err, foundLands) => {
        if (err) console.log('Error in lands#index:', err);

        if (!foundLands) return res.json({ message: 'No lands found in DB' })

        // send the foundLands from the DB as an array of objects
        res.json({ lands: foundLands })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.Land.findById(req.params.id, (err, foundLand) => {
        if (err) console.log('Error in lands#show:', err);

        // handle the case where a land is not found
        if (!foundLand) return res.json({ message: "land with that ID was not found." })

        // handle the response when the land is found
        res.json({ land: foundLand })
    });
};

const create = (req, res) => {
    db.Land.create(req.body, (err, savedLand) => {
        if (err) console.log('Error in lands#create:', err);
        
        // return an updated list of lands, do this:
        // res.redirect('/api/v1/lands')
        res.json({ land: savedLand })
    });
};

const update = (req, res) => {
    db.Land.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLand) => {
        if (err) console.log('Error in lands#update:', err);

        res.json({ land: updatedLand });
    });
};

const destroy = (req, res) => {
    db.Land.findByIdAndDelete(req.params.id, (err, deletedLand) => {
        if (err) console.log('Error in lands#destroy:', err);

        res.json({ message: "land removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
