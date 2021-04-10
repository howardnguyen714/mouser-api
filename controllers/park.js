const db = require('../models');

const index = (req, res) => {
    db.Park.find({}, (err, foundParks) => {
        if (err) console.log('Error in parks#index:', err);

        if (!foundParks) return res.json({ message: 'No parks found in DB' })

        // send the foundParks from the DB as an array of objects
        res.json({ parks: foundParks })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.Park.findById(req.params.id, (err, foundPark) => {
        if (err) console.log('Error in parks#show:', err);

        // handle the case where a park is not found
        if (!foundPark) return res.json({ message: "park with that ID was not found." })

        // handle the response when the park is found
        res.json({ park: foundPark })
    });
};

const create = (req, res) => {
    db.Park.create(req.body, (err, savedPark) => {
        if (err) console.log('Error in parks#create:', err);
        
        // upon creation, find associated resort and 

        // return an updated list of parks, do this:
        // res.redirect('/api/v1/parks')
        res.json({ park: savedPark })
    });
};

const update = (req, res) => {
    db.Park.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPark) => {
        if (err) console.log('Error in parks#update:', err);

        res.json({ park: updatedPark });
    });
};

const destroy = (req, res) => {
    db.Park.findByIdAndDelete(req.params.id, (err, deletedPark) => {
        if (err) console.log('Error in parks#destroy:', err);

        res.json({ message: "park removed." });
    });
};

const createTag = async (req, res) => {
    const foundPark = await db.Park.findById(req.params.id)
    foundPark.tags.push({text: req.body.tag, upvotes: 0})
    foundPark.save()

    res.json({park: foundPark})
}

const upvoteTag = async (req, res) => {
    const foundPark = await db.Park.findById(req.params.id)
    foundPark.tags[0].upvotes ++
    foundPark.save()
    res.json({park: foundPark})
}

const createTip = async (req, res) => {
    const foundPark = await db.Park.findById(req.params.id)
    foundPark.tips.push({text: req.body.tip, upvotes: 0})
    foundPark.save()

    res.json({park: foundPark})
}

const upvoteTip = async (req, res) => {
    const foundPark = await db.Park.findById(req.params.id)
    foundPark.tips[0].upvotes ++
    foundPark.save()
    res.json({park: foundPark})
}

// const foundResort = await db.Resort.findById(seededResorts[0]["_id"])
//         for (park in seededParks) {
//             foundResort.parks.push(seededParks[park]["_id"])
//         }
//         console.log(foundResort)
//         foundResort.save()

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    createTag,
    upvoteTag,
    createTip,
    upvoteTip,
};
