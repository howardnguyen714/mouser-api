const db = require('../models');

const index = (req, res) => {
    db.Ride.find({}, (err, foundRides) => {
        if (err) console.log('Error in rides#index:', err);

        if (!foundRides) return res.json({ message: 'No rides found in DB' })

        // send the foundRides from the DB as an array of objects
        res.json({ rides: foundRides })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.Ride.findById(req.params.id, (err, foundRide) => {
        if (err) console.log('Error in rides#show:', err);

        // handle the case where a ride is not found
        if (!foundRide) return res.json({ message: "ride with that ID was not found." })

        // handle the response when the ride is found
        res.json({ ride: foundRide })
    });
};

const create = (req, res) => {
    db.Ride.create(req.body, (err, savedRide) => {
        if (err) console.log('Error in rides#create:', err);
        
        // return an updated list of rides, do this:
        // res.redirect('/api/v1/rides')
        res.json({ ride: savedRide })
    });
};

const update = (req, res) => {
    db.Ride.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedRide) => {
        if (err) console.log('Error in rides#update:', err);

        res.json({ ride: updatedRide });
    });
};

const destroy = (req, res) => {
    db.Ride.findByIdAndDelete(req.params.id, (err, deletedRide) => {
        if (err) console.log('Error in rides#destroy:', err);

        res.json({ message: "ride removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
