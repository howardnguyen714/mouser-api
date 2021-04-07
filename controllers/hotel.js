const db = require('../models');

const index = (req, res) => {
    db.Hotel.find({}, (err, fountHotels) => {
        if (err) console.log('Error in hotels#index:', err);

        if (!fountHotels) return res.json({ message: 'No hotels found in DB' })

        // send the fountHotels from the DB as an array of objects
        res.json({ hotels: fountHotels })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.Hotel.findById(req.params.id, (err, foundHotel) => {
        if (err) console.log('Error in hotels#show:', err);

        // handle the case where a hotel is not found
        if (!foundHotel) return res.json({ message: "hotel with that ID was not found." })

        // handle the response when the hotel is found
        res.json({ hotel: foundHotel })
    });
};

const create = (req, res) => {
    db.Hotel.create(req.body, (err, savedHotel) => {
        if (err) console.log('Error in hotels#create:', err);
        
        // return an updated list of hotels, do this:
        // res.redirect('/api/v1/hotels')
        res.json({ hotel: savedHotel })
    });
};

const update = (req, res) => {
    db.Hotel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedHotel) => {
        if (err) console.log('Error in hotels#update:', err);

        res.json({ hotel: updatedHotel });
    });
};

const destroy = (req, res) => {
    db.Hotel.findByIdAndDelete(req.params.id, (err, deletedHotel) => {
        if (err) console.log('Error in hotels#destroy:', err);

        res.json({ message: "hotel removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
