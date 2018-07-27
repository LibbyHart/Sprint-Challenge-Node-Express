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

server.get('/api/actions/:id', (req, res) => {
    const { id } = req.params;
    if(!id) {
        res.status(404);
        res.json({ error: "That action ID does not exist" })
        } else {
    actionM
    .get(id)
    .then(action => {
        res.json({ action })
    })
    .catch(error=> {
        res.status(500)
        res.json({ error: "The action information could not be retrieved." })
    });
}
});

//Insert Action

server.post('/api/actions', (req, res) => {
    const { project_id, description, notes, completed } = req.body;
    actionM
    .insert({ project_id, description, notes, completed })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error=> {
        res.status(500)
        res.json({ error: "The action could not be added." })
    });
});

//Update Action

server.put('/api/actions/:id', (req, res) => {
    const { id } = req.params;
    const { description, notes, completed } = req.body;

    if(!id) {
        res.status(404);
        res.json({ error: "The action with the specified ID does not exist." })
    }
    actionM
    .update(id, req.body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error=> {
        res.status(500)
        res.json({ error: "The action information could not be updated." })
    });
});

//Delete Action

server.delete('/api/actions/:id', (req, res) => {
    const { id } = req.params;
    if(!id) {
        res.status(404)
        res.json({ error: "The action with the specified ID does not exist." })
        }
    actionM
    .remove(id)
    .then(response => {
        res.status(200).json(response)
                })
            .catch(error => {
                res.status(500)
                res.json({ error: "The action could not be removed" })
            });
});

//Project Endpoints

//List of projects

// server.get('/api/projects', (req, res) => {
//     projectM
//     .get()
//     .then(response => {
//         res.status(200).json(response);
//     })
//     .catch(error => {
//         res.status(500)
//         res.json({ error: "The project information could not be retrieved." })
//     });
// });

//Get by ID

//Insert Project

//Update Project

//Delete Project

//Project ID returns Actions

server.listen(port, () => console.log('API running...'))