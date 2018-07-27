const express = require('express');
const cors = require('cors');
const projectM = require('./data/helpers/projectModel.js');
const actionM = require('./data/helpers/actionModel.js');

const port = 5555;
const server = express();
server.use(express.json());
server.use(cors());

//Action Endpoints

//List of actions

server.get('/api/actions', (req, res) => {
    actionM
    .get()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500)
        res.json({ error: "The action information could not be retrieved." })
    });
});
//Get by ID

//Insert Action

//Update Action

//Delete Action



//Project Endpoints

//List of projects

//Get by ID

//Insert Project

//Update Project

//Delete Project

//Project ID returns Actions

server.listen(port, () => console.log('API running...'))