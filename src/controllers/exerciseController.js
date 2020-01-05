const Exercise = require('../models/exerciseModel');

exports.getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();

        res.status(200).json({
            status: 'success',
            data: {
                exercises
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
};

exports.getExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                exercise
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
};

exports.createExercise = async (req, res) => {
    try {
        const newExercise = await Exercise.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                exercise: newExercise
            }
        });
    } catch (err) {
        res.status(404).json({
            message: 'error',
            message: err
        });
    }
};

exports.updateExercise = async (req, res) => {
    try {
        const updatedExercise = await Exercise.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            status: 'success',
            data: {
                exercise: updatedExercise
            }
        });
    } catch (err) {
        res.status(404).json({
            message: 'error',
            message: err
        });
    }
};

exports.deleteExercise = async (req, res) => {
    try {
        await Exercise.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            message: 'error',
            message: err
        });
    }
};
