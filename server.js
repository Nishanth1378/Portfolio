const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

// Set up SQLite database
const db = new sqlite3.Database('messages.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
    db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      message TEXT,
      date TEXT
    )`);
  }
});

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lightninghawking13@gmail.com',      // <-- replace with your Gmail
    pass: 'sxxx zbae jmfy fgmx'          // <-- replace with your Gmail App Password
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Save to SQLite database
  const date = new Date().toISOString();
  db.run(
    `INSERT INTO messages (name, email, message, date) VALUES (?, ?, ?, ?)`,
    [name, email, message, date],
    function (err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Failed to save message' });
      }

      // Send email
      transporter.sendMail({
        from: 'lightninghawking13@gmail.com',
        to: 'lightninghawking13@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      }, (err, info) => {
        if (err) {
          console.error('Email error:', err);
          return res.status(500).json({ error: 'Failed to send email' });
        }
        res.status(200).json({ message: 'Message sent and saved successfully' });
      });
    }
  );
});

// Endpoint to view all messages
app.get('/api/messages', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY date DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }
    res.json(rows);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});