const db = require('../models');

const index = (req, res) => {
    db.Dining.find({}, (err, foundDinings) => {
        if (err) console.log('Error in dinings#index:', err);

        if (!foundDinings) return res.json({ message: 'No dinings found in DB' })

        // send the foundDinings from the DB as an array of objects
        res.json({ dinings: foundDinings })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.Dining.findById(req.params.id, (err, foundDining) => {
        if (err) console.log('Error in dinings#show:', err);

        // handle the case where a dining is not found
        if (!foundDining) return res.json({ message: "Dining with that ID was not found." })

        // handle the response when the dining is found
        res.json({ dining: foundDining })
    });
};

const create = (req, res) => {
    db.Dining.create(req.body, (err, savedDining) => {
        if (err) console.log('Error in dinings#create:', err);
        
        // return an updated list of dinings, do this:
        // res.redirect('/api/v1/dinings')
        res.json({ dining: savedDining })
    });
};

const update = (req, res) => {
    db.Dining.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedDining) => {
        if (err) console.log('Error in dinings#update:', err);

        res.json({ dining: updatedDining });
    });
};

const destroy = (req, res) => {
    db.Dining.findByIdAndDelete(req.params.id, (err, deletedDining) => {
        if (err) console.log('Error in dinings#destroy:', err);

        res.json({ message: "dining removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
