const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/mouser";
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Resort: require('./Resort'),
    Park: require('./Park'),
    // Dining: require('./Dining'),
    // Hotel: require('./Hotel'),
    // Land: require('./Land'),
    // Ride: require('./Ride'),
    // Shop: require('./Shop'),
    // ShoppingDistrict: require('./ShoppingDistrict'),
    // Show: require('./Show'),
    // SurroundingArea: require('./SurroundingArea'),
};
