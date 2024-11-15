// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('conference', { title: 'Conference' });
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
var conference_controller = require('../controllers/conference');

router.get('/', conference_controller.conference_list);

router.post('/create', conference_controller.conference_create_post);

router.get('/:id', conference_controller.conference_detail);

// router.get('/:id/update', conference_controller.conference_update_get);

// router.get('/:id/delete', conference_controller.conference_delete_get);

// router.post('/:id/update', conference_controller.conference_update_post);

// router.post('/:id/delete', conference_controller.conference_delete_post);

module.exports = router;