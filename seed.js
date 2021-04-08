require("dotenv").config()
const db = require('./models');
const data = require('./seedData.json');

db.Resort.deleteMany({}, (err, deletedResorts) => {
    db.Park.deleteMany({}, (err, deletedParks) => {
        db.Resort.create(data.resorts, (err, seededResorts) => {
            if (err) console.log(err);
            
            console.log("==================================================")
            console.log(data.resorts.length, 'resorts created successfully');
            console.log(seededResorts)
            console.log("==================================================")
            db.Park.create(data.parks, (err, seededParks) => {
                
                if (err) console.log(err);
                
                console.log("==================================================")
                console.log(data.parks.length, 'parks created successfully');
                console.log(seededParks)
                console.log("==================================================")
    
                db.Resort.findById(seededResorts[0]["_id"], (err, foundResort) => {
                    for (park in seededParks) {
                        foundResort.parks.push(seededParks[park]["_id"])
                    }
                    console.log(foundResort)
                    foundResort.save()
                })
                // process.exit();    
            })
        });
    })
});