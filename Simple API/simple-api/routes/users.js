var express = require('express');
var router = express.Router();

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Marcus', email: 'marcus@example.com' }
];

let nextId = users.length + 1; // Track the next unique ID

// GET route to fetch all users
router.get('/', (req, res) => {
  res.json(users); // Respond with the list of users
});

// POST route to add a new user
router.post('/', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = {
    id: nextId++, // Use and increment the next unique ID
    name,
    email
  };

  users.push(newUser); // Add the new user to the array
  res.status(201).json(newUser); // Respond with the created user
});

// PUT route to update an existing user
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (name) user.name = name; // Update name if provided
  if (email) user.email = email; // Update email if provided

  res.json(user); // Respond with the updated user
});

// DELETE route to remove a user by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex(user => user.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(userIndex, 1)[0]; // Remove the user from the array
  res.json(deletedUser); // Respond with the deleted user
});

module.exports = router;