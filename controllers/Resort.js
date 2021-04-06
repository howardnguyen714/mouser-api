const db = require('../models');

const index = (req, res) => {
    db.Resort.find({}, (err, foundResorts) => {
        if (err) console.log('Error in resorts#index:', err);

        if (!foundResorts) return res.json({ message: 'No resorts found in DB' })

        // send the foundResorts from the DB as an array of objects
        res.json({ resorts: foundResorts })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.Resort.findById(req.params.id, (err, foundResort) => {
        if (err) console.log('Error in resorts#show:', err);

        // handle the case where a resort is not found
        if (!foundResort) return res.json({ message: "Resort with that ID was not found." })

        // handle the response when the resort is found
        res.json({ resort: foundResort })
    });
};

const create = (req, res) => {
    db.Resort.create(req.body, (err, savedResort) => {
        if (err) console.log('Error in resorts#create:', err);
        
        // return an updated list of resorts, do this:
        // res.redirect('/api/v1/resorts')
        res.json({ resort: savedResort })
    });
};

const update = (req, res) => {
    db.Resort.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedResort) => {
        if (err) console.log('Error in resorts#update:', err);

        res.json({ resort: updatedResort });
    });
};

const destroy = (req, res) => {
    db.Resort.findByIdAndDelete(req.params.id, (err, deletedResort) => {
        if (err) console.log('Error in resorts#destroy:', err);

        res.json({ message: "Resort removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
