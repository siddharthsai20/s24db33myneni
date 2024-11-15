// var Conference = require('../models/conference');
// // List of all Costumes
// exports.conference_list = function(req, res) {
//  res.send('NOT IMPLEMENTED: Conference list');
// };
// // for a specific Costume.
// exports.conference_detail = function(req, res) {
//  res.send('NOT IMPLEMENTED: Conference detail: ' + req.params.id);
// };
// // Handle Costume create on POST.
// exports.conference_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: Conference create POST');
// };
// // Handle Costume delete from on DELETE.
// exports.conference_delete = function(req, res) {
//  res.send('NOT IMPLEMENTED: Conference delete DELETE ' + req.params.id);
// };
// // Handle Costume update form on PUT.
// exports.conference_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: Conference update PUT' + req.params.id);
// };

const Conference = require('../models/conference');

exports.conference_list = async function(req, res) {
  try {
      const conference = await Conference.find();
      res.render('conference', { results: conference });
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};
  
exports.conference_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Conference detail: ' + req.params.id);
};

exports.conference_create_post = async function(req, res) {
  let document = new Conference();
  document.conference_name = req.body.conference_name;
  document.location = req.body.location;
  document.year = req.body.year;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};


exports.conference_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Conference delete DELETE ' + req.params.id);
};

exports.conference_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Conference update PUT ' + req.params.id);
};