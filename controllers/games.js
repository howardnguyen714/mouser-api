const db = require('../models');

const index = (req, res) => {
    db.Game.find({}, (err, foundGames) => {
        if (err) console.log('Error in games#index:', err);

        if (!foundGames) return res.json({ message: 'No games found in DB' })

        // send the foundGames from the DB as an array of objects
        res.json({ games: foundGames })
    });
};

const show = (req, res) => {
    // DO NOT MODIFY LINE 16
    db.Game.findById(req.params.id, (err, foundGame) => {
        if (err) console.log('Error in games#show:', err);

        // handle the case where a game is not found
        if (!foundGame) return res.json({ message: "Game with that ID was not found." })

        // handle the response when the game is found
        res.json({ game: foundGame })
    });
};

const create = (req, res) => {
    db.Game.create(req.body, (err, savedGame) => {
        if (err) console.log('Error in games#create:', err);
        
        // return an updated list of games, do this:
        // res.redirect('/api/v1/games')
        res.json({ game: savedGame })
    });
};

const update = (req, res) => {
    db.Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGame) => {
        if (err) console.log('Error in games#update:', err);

        res.json({ game: updatedGame });
    });
};

const destroy = (req, res) => {
    db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
        if (err) console.log('Error in games#destroy:', err);

        res.json({ message: "Game removed." });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
