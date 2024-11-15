// var express = require('express');
// var router = express.Router();
// // Require controller modules.
// var api_controller = require('../controllers/api');
// var conference_controller = require('../controllers/conference');
// /// API ROUTE ///
// // GET resources base.
// router.get('/', api_controller.api);
// /// conference ROUTES ///
// // POST request for creating a conference.
// router.post('/conference', conference_controller.conference_create_post);
// // DELETE request to delete conference.
// router.delete('/conference/:id', conference_controller.conference_delete);
// // PUT request to update conference.
// router.put('/conference/:id', conference_controller.conference_update_put);
// // GET request for one conference.
// router.get('/conference/:id', conference_controller.conference_detail);
// // GET request for list of all conference items.
// router.get('/conference', conference_controller.conference_list);
// module.exports = router;

var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var conference_controller = require('../controllers/conference');

router.get('/', api_controller.api);

router.post('/conference', conference_controller.conference_create_post);

router.delete('/conference/:id', conference_controller.conference_delete);

router.put('/conference/:id', conference_controller.conference_update_put);

router.get('/conference/:id', conference_controller.conference_detail);

router.get('/conference', conference_controller.conference_list);

module.exports = router;
