var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Flister = require('./flister');

var schema = new Schema({
    description: {type: String, required: true},
    flister: {type: Schema.Types.ObjectId, ref: 'Flister'}
});

schema.post('remove', function (flisting) {
    User.findById(flisting.flister, function (err, flister) {
        flister.flistings.pull(flisting);
        flister.save();
    });
});

module.exports = mongoose.model('Flisting', schema);
