const express = require('express');
const uuid = require('uuid');
const app = express();

// In-memory storage for users and events
let users = {};
let calendar = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Get all calendar events
apiRouter.get('/events', (_req, res) => {
  res.send(calendar);
});

// Add a new calendar event
apiRouter.post('/events', (req, res) => {
  const { title, date, time, description, createdBy } = req.body;
  if (!title || !date || !createdBy) {
    res.status(400).send({ msg: 'Missing required fields: title, date, or createdBy.' });
    return;
  }

  const newEvent = { id: uuid.v4(), title, date, time, description, createdBy };
  calendar.push(newEvent);
  res.send(newEvent);
});

// Delete a calendar event
apiRouter.delete('/events/:id', (req, res) => {
  const eventId = req.params.id;
  const index = calendar.findIndex(event => event.id === eventId);
  if (index !== -1) {
    calendar.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).send({ msg: 'Event not found' });
  }
});

// Edit a calendar event
apiRouter.put('/events/:id', (req, res) => {
  const eventId = req.params.id;
  const event = calendar.find(event => event.id === eventId);
  if (!event) {
    res.status(404).send({ msg: 'Event not found' });
    return;
  }

  const { title, date, time, description } = req.body;
  if (title) event.title = title;
  if (date) event.date = date;
  if (time) event.time = time;
  if (description) event.description = description;

  res.send(event);
});