let Workouts = require("../models/workouts")


module.exports = (app) => {
    app.post("/api/workouts", (req, res) => {
        Workouts.create(req.body)
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts", (req, res) => {
        Workouts.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workouts.find({})
        .limit(7)
        .then(dbworkouts => {
            res.json(dbworkouts);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workouts.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then((dbworkouts) => {
            res.json(dbworkouts)
        });
    });
}


