var Conference = require('../models/conference');
// List of all Costumes
exports.conference_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Conference list');
};
// for a specific Costume.
exports.conference_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Conference detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.conference_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Conference create POST');
};
// Handle Costume delete from on DELETE.
exports.conference_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Conference delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.conference_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Conference update PUT' + req.params.id);
};