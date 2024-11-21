// // var Conference = require('../models/conference');
// // // List of all Costumes
// // exports.conference_list = function(req, res) {
// //  res.send('NOT IMPLEMENTED: Conference list');
// // };
// // // for a specific Costume.
// // exports.conference_detail = function(req, res) {
// //  res.send('NOT IMPLEMENTED: Conference detail: ' + req.params.id);
// // };
// // // Handle Costume create on POST.
// // exports.conference_create_post = function(req, res) {
// //  res.send('NOT IMPLEMENTED: Conference create POST');
// // };
// // // Handle Costume delete from on DELETE.
// // exports.conference_delete = function(req, res) {
// //  res.send('NOT IMPLEMENTED: Conference delete DELETE ' + req.params.id);
// // };
// // // Handle Costume update form on PUT.
// // exports.conference_update_put = function(req, res) {
// //  res.send('NOT IMPLEMENTED: Conference update PUT' + req.params.id);
// // };

// const Conference = require('../models/conference');

// exports.conference_list = async function(req, res) {
//   try {
//       const conference = await Conference.find();
//       res.render('conference', { results: conference });
//   } catch (err) {
//       res.status(500).send(`Error: ${err}`);
//   }
// };
  
// // exports.conference_detail = function(req, res) {
// //   res.send('NOT IMPLEMENTED: Conference detail: ' + req.params.id);
// // };

// //read one
// exports.conference_detail = async function(req, res) {
//     console.log("detail" + req.params.id);
//     try {
//         let result = await Conference.findById(req.params.id);
//         res.send(result);
//     } catch (error) {
//         res.status(500);
//         res.send(`{"error": document for id ${req.params.id} not found`);
//     }
//   };
  

// exports.conference_create_post = async function(req, res) {
//   let document = new Conference();
//   document.conference_name = req.body.conference_name;
//   document.location = req.body.location;
//   document.year = req.body.year;
//   try {
//     let result = await document.save();
//     res.send(result);
//   } catch (err) {
//     res.status(500);
//     res.send(`{"error": ${err}}`);
//   }
// };

// exports.conference_update_get = async function(req, res) {
//     try {
//         const conference = await Conference.findById(req.params.id);
//         if (!conference) {
//             res.status(404).send('Conference not found');
//             return;
//         }
//         res.render('conference_update', { conference });
//     } catch (err) {
//         res.status(500).send(`Error: ${err}`);
//     }
//   };
  


// //delete one
// exports.conference_delete = async function(req, res) {
//   try {
//       const result = await Conference.findByIdAndDelete(req.params.id);
//       if (!result) {
//           res.status(404).send('Conference not found');
//           return;
//       }
//       res.send(`Conference with id ${req.params.id} was deleted.`);
//   } catch (err) {
//       res.status(500).send(`Error: ${err}`);
//   }
// };



// // exports.conference_delete = function(req, res) {
// //   res.send('NOT IMPLEMENTED: Conference delete DELETE ' + req.params.id);
// // };

// exports.conference_update_put = function(req, res) {
//   res.send('NOT IMPLEMENTED: Conference update PUT ' + req.params.id);
// };




const Conference = require('../models/conference');

//Get all Read
exports.conference_list = async function (req, res) {
    try {
        const conference = await Conference.find();
        res.render('conference', { results: conference });
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
};

//create one
exports.conference_create_post = async function (req, res) {
    let document = new Conference();
    document.conference_name = req.body.conference_name;
    document.year = req.body.year;
    document.location = req.body.location;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.conference_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Conference delete DELETE ' + req.params.id);
};

//put one update
// Conference controller (controllers/conference.js)
exports.conference_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Conference.findById(req.params.id);
        // Update properties
        if (req.body.conference_name) toUpdate.conference_name = req.body.conference_name;
        if (req.body.location) toUpdate.location = req.body.location;
        if (req.body.year) toUpdate.year = req.body.year;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

//read one
exports.conference_detail = async function (req, res) {
    console.log("detail" + req.params.id);
    try {
        let result = await Conference.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//delete one
exports.conference_delete = async function (req, res) {
    console.log("delete " + req.params.id);
    try {
        const result = await Conference.findByIdAndDelete(req.params.id);
        console.log("Removed " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//single view
exports.conference_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id);
    try {
        result = await Conference.findById(req.query.id);
        res.render('conferencedetail',
            { title: 'Conference Detail', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

exports.conference_create_Page = function (req, res) {
    console.log("create view");
    try {
        res.render('conferencecreate', { title: 'Conference Create' });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
}

exports.conference_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Conference.findById(req.query.id)
        res.render('conferenceupdate', { title: 'Conference Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.conference_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Conference.findById(req.query.id)
        res.render('conferencedelete', {
            title: 'conference Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

