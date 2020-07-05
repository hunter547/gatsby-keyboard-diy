const mongoose = require('mongoose');

var stabsSchema = mongoose.Schema({
  name: { type: String, required: true },
  descr: { type: String, required: true }
});

var Stabs = mongoose.model('Stabs', stabsSchema);

module.exports.Stabs = Stabs;