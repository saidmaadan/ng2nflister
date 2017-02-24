var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Flister = require('../models/user');
var Flisting = require('../models/flisting');

router.get('/', function (req, res, next) {
    Flisting.find()
        .populate('user', 'firstName')
        .exec(function (err, flistings) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                flisting: 'Success',
                obj: flistings
            });
        });
});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Flister.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var flisting = new Flisting({
            content: req.body.content,
            user: user
        });
        flisting.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.flistings.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved flisting',
                obj: result
            });
        });
    });
});

router.patch('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Flisting.findById(req.params.id, function (err, flisting) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!flisting) {
            return res.status(500).json({
                title: 'No Flisting Found!',
                error: {message: 'Flisting not found'}
            });
        }
        if (flisting.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Flisters do not match'}
            });
        }
        flisting.content = req.body.content;
        flisting.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated flisting',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Flisting.findById(req.params.id, function (err, flisting) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!flisting) {
            return res.status(500).json({
                title: 'No Flisting Found!',
                error: {message: 'Flisting not found'}
            });
        }
        if (flisting.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Flisters do not match'}
            });
        }
        flisting.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted flisting',
                obj: result
            });
        });
    });
});

module.exports = router;
