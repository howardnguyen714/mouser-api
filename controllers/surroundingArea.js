const db = require('../models');

const index = (req, res) => {
    db.SurroundingArea.find({}, (err, foundSurroundingAreas) => {
        if (err) console.log('Error in surroundingAreas#index:', err);

        if (!foundSurroundingAreas) return res.json({ message: 'No surroundingAreas found in DB' })

        // send the foundSurroundingAreas from the DB as an array of objects
        res.json({ surroundingAreas: foundSurroundingAreas })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.SurroundingArea.findById(req.params.id, (err, foundSurroundingArea) => {
        if (err) console.log('Error in surroundingAreas#show:', err);

        // handle the case where a surroundingArea is not found
        if (!foundSurroundingArea) return res.json({ message: "surroundingArea with that ID was not found." })

        // handle the response when the surroundingArea is found
        res.json({ surroundingArea: foundSurroundingArea })
    });
};

const create = (req, res) => {
    db.SurroundingArea.create(req.body, (err, savedSurroundingArea) => {
        if (err) console.log('Error in surroundingAreas#create:', err);
        
        // return an updated list of surroundingAreas, do this:
        // res.redirect('/api/v1/surroundingAreas')
        res.json({ surroundingArea: savedSurroundingArea })
    });
};

const update = (req, res) => {
    db.SurroundingArea.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedSurroundingArea) => {
        if (err) console.log('Error in surroundingAreas#update:', err);

        res.json({ surroundingArea: updatedSurroundingArea });
    });
};

const destroy = (req, res) => {
    db.SurroundingArea.findByIdAndDelete(req.params.id, (err, deletedSurroundingArea) => {
        if (err) console.log('Error in surroundingAreas#destroy:', err);

        res.json({ message: "surroundingArea removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
