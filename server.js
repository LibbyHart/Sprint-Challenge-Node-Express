const express = require('express');
const cors = require('cors');
const projectM = require('./data/helpers/projectModel.js');
const actionM = require('./data/helpers/actionModel.js');

const port = 5555;
const server = express();
server.use(express.json());
server.use(cors());

const errorHandler = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

//Action Endpoints

//List of actions

server.get('/api/actions', (req, res) => {
    actionM
    .get()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        errorHandler(500, "The action information could not be retrieved.", res);
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
        errorHandler(500, "The action information could not be retrieved.", res);
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
        errorHandler(500, "The action could not be added", res);

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
    .update(id, { description, notes, completed })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error=> {
        errorHandler(500, "The action information could not be updated.", res);
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
                errorHandler(500, "The action information could not be removed.", res);
            });
});

//Project Endpoints

//List of projects

server.get('/api/projects', (req, res) => {
    projectM
    .get()
    .then(projects => {
        res.json({ projects });
    })
    .catch(error => {
        errorHandler(500, "The project information could not be retrieved.", res);
    });
});

//Get by ID

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    if(!id) {
        res.status(404);
        res.json({ error: "That project ID does not exist" })
        } else {
    projectM
    .get(id)
    .then(project => {
        res.json({ project })
    })
    .catch(error=> {
        errorHandler(500, "The project information could not be retrieved.", res);
    });
}
});

//Insert Project

server.post('/api/projects', (req, res) => {
    const { name, description, completed } = req.body;
    projectM
    .insert({ name, description, completed })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error=> {
        errorHandler(500, "The project could not be added", res);

    });
});

//Update Project

server.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, completed } = req.body;

    if(!name || !description) {
        res.status(404);
        res.json({ error: "Please name your project." })
    }
    projectM
    .update(id, { name, description, completed })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error=> {
        errorHandler(500, "The project information could not be updated.", res);
    });
});

//Delete Project

server.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    if(!id) {
        res.status(404)
        res.json({ error: "The project with the specified ID does not exist." })
        }
    projectM
    .remove(id)
    .then(response => {
        res.status(200).json(response)
                })
            .catch(error => {
                errorHandler(500, "The project information could not be removed.", res);
            });
});

//Project ID returns Actions

server.get('/api/projects/:id/actions', (req, res) => {
    const { id } = req.params;
    projectM
    .getProjectActions(id)
    .then(actions => {
        res.json({ actions })
    })
    .catch(error => {
        errorHandler(500, "The project actions could not be retrieved.", res);
    });
});

server.listen(port, () => console.log('API running...'))