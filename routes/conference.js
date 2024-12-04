// // var express = require('express');
// // var router = express.Router();

// // /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('conference', { title: 'Conference' });
// // });

// // module.exports = router;

// var express = require('express');
// var router = express.Router();
// var conference_controller = require('../controllers/conference');

// router.get('/', conference_controller.conference_list);

// router.post('/', conference_controller.conference_create_post);

// router.get('/:id', conference_controller.conference_detail);

// router.get('/:id/update', conference_controller.conference_update_get);


// router.delete('/:id', conference_controller.conference_delete);

// // router.get('/:id/delete', conference_controller.conference_delete_get);

// // router.post('/:id/update', conference_controller.conference_update_post);

// // router.post('/:id/delete', conference_controller.conference_delete_post);

// module.exports = router;  



var express = require('express');
var router = express.Router();
var conference_controller = require('../controllers/conference');
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

router.get('/', conference_controller.conference_list);

router.post('/', conference_controller.conference_create_post);

//router.get('/:id', conference_controller.conference_update_get);

//router.get('/:id', conference_controller.conference_delete_get);

router.put('/conference:id', conference_controller.conference_update_put);

router.delete('/conference:id', conference_controller.conference_delete);

router.get('/conference:id', conference_controller.conference_detail);

router.get('/detail', conference_controller.conference_view_one_Page);

router.get('/create', conference_controller.conference_create_Page);

router.get('/update', conference_controller.conference_update_Page);

router.get('/delete', conference_controller.conference_delete_Page);

module.exports = router;  



