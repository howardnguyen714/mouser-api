const db = require('../models');

const index = (req, res) => {
    db.Show.find({}, (err, foundShows) => {
        if (err) console.log('Error in shows#index:', err);

        if (!foundShows) return res.json({ message: 'No shows found in DB' })

        // send the foundShows from the DB as an array of objects
        res.json({ shows: foundShows })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.Show.findById(req.params.id, (err, foundShow) => {
        if (err) console.log('Error in shows#show:', err);

        // handle the case where a show is not found
        if (!foundShow) return res.json({ message: "show with that ID was not found." })

        // handle the response when the show is found
        res.json({ show: foundShow })
    });
};

const create = (req, res) => {
    db.Show.create(req.body, (err, savedShow) => {
        if (err) console.log('Error in shows#create:', err);
        
        // return an updated list of shows, do this:
        // res.redirect('/api/v1/shows')
        res.json({ show: savedShow })
    });
};

const update = (req, res) => {
    db.Show.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedShow) => {
        if (err) console.log('Error in shows#update:', err);

        res.json({ show: updatedShow });
    });
};

const destroy = (req, res) => {
    db.Show.findByIdAndDelete(req.params.id, (err, deletedShow) => {
        if (err) console.log('Error in shows#destroy:', err);

        res.json({ message: "show removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
