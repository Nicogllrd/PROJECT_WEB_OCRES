var express = require('express');
var router = express.Router();
const _ = require('lodash');

  const meetings= [
    {
      id:"1",
      date: "06/12/2021",
      lieu: 'ECE'
    },
    {
      id:"2",
      date: "07/12/2021",
      lieu: 'ECE'
    },
    {
      id:"3",
      date: "08/12/2021",
      lieu: 'ECE'
    },
    {
      id:"4",
      date: "09/12/2021",
      lieu: 'ECE'
    },
    {
      id:"5",
      date: "10/12/2021",
      lieu: 'ECE'
    }
  ];

    //GET meeting listing.
    router.get('/', (req, res) => {
      // Get List of meeting and return JSON
      res.status(200).json({ meetings });
    });

    /* GET one meeting. */
    router.get('/:id', (req, res) => {
      const { id } = req.params;
      // Find meeting in DB
      let meeting = _.find(meetings, ["id", id]);
      // Return meeting
      res.status(200).json({
        meeting
      });
    });

      /* PUT new meeting. */
    router.put('/', (req, res) => {
    // Get the data from request from request
    const { meeting } = req.body;
    // Create new unique id
    const id = _.uniqueId();
    // Insert it in array (normaly with connect the data with the database)
    meetings.push({ meeting, id });
    // Return message
      res.json({
        message: `Just added ${id}`,
        meeting: { meeting, id }
      });
    });

     /* DELETE meeting. */
    router.delete('/:id', (req, res) => {
    // Get the :id of the meeting we want to delete from the params of the request
    const { id } = req.params;
  
    // Remove from "DB"
    _.remove(meetings, ["id", id]);
  
    // Return message
      res.json({
        message: `Just removed ${id}`
      });
    });

     /* UPDATE meeting. */
    router.post('/:id', (req, res) => {
    // Get the :id of the meeting we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the meeting we want to update from the body of the request
    const { meeting } = req.body;
    // Find in DB
    const meetingToUpdate = _.find(meeting, ["id", id]);
    // Update data with new data (js is by address)
    meetingToUpdate.meeting = meeting;
  
    // Return message
      res.json({
        message: `Just updated ${id} with ${meeting}`
      });
    });

    module.exports = router;
