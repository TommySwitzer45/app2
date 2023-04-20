const express = require('express');
const app = express();
const port = 3000;

// Initialize an array of resources
let resources = [
  { id: 1, name: 'Resource 1' },
  { id: 2, name: 'Resource 2' },
  { id: 3, name: 'Resource 3' }
];

// Middleware to parse JSON request bodies
app.use(express.json());

// Route for getting a resource by ID
app.get('/resources/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const resource = resources.find(r => r.id === id);

  if (resource) {
    res.send(resource);
  } else {
    res.status(404).send('Resource not found');
  }
});

// Route for creating a new resource
app.post('/resources', (req, res) => {
  const name = req.body.name;
  const id = resources.length + 1;
  const resource = { id, name };
  resources.push(resource);

  console.log('Resource created:', resource);
  res.send(resource);
});

// Route for updating an existing resource by ID
app.put('/resources/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const resourceIndex = resources.findIndex(r => r.id === id);

  if (resourceIndex !== -1) {
    const name = req.body.name;
    const updatedResource = { id, name };
    resources[resourceIndex] = updatedResource;

    console.log('Resource updated:', updatedResource);
    res.send(updatedResource);
  } else {
    res.status(404).send('Resource not found');
  }
});

// Route for deleting a resource by ID
app.delete('/resources/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const resourceIndex = resources.findIndex(r => r.id === id);

  if (resourceIndex !== -1) {
    resources.splice(resourceIndex, 1);

    console.log('Resource deleted:', id);
    res.send('Resource deleted');
  } else {
    res.status(404).send('Resource not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});