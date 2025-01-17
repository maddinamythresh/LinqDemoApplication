const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Use CORS middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Connect to SQLite database (or create one if it doesn't exist)
const db = new sqlite3.Database('./contacts.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to the SQLite database');
  }
});

// Create a table for contacts (if it doesn't already exist)
db.run(`CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL
)`);

// Route to get all contacts
app.get('/contacts', (req, res) => {
  db.all('SELECT * FROM contacts', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows); // Send all contacts as response
  });
});

// Route to add a new contact
app.post('/contacts', (req, res) => {
  const { name, email } = req.body;
  
  // Insert new contact into the database
  const stmt = db.prepare('INSERT INTO contacts (name, email) VALUES (?, ?)');
  stmt.run(name, email, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      id: this.lastID, // Send the new contact ID back
      name,
      email
    });
  });
  stmt.finalize(); // Close the prepared statement
});

// Route to delete a contact
app.delete('/contacts/:id', (req, res) => {
  const { id } = req.params;

  // Delete the contact from the database
  db.run('DELETE FROM contacts WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  });
});

// Start the server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
