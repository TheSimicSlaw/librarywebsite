// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const mysql = require('mysql');

// const app = express();
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'alinabangash',
//   password: 'libdb123!',
//   database: 'db123',
// });

// // Endpoint for user authentication
// app.post('/api/authenticate', (req, res) => {
//   const { StudentID, ContactNumber } = req.body;

//   db.query('SELECT * FROM students WHERE StudentID = ?', [StudentID], async (error, results) => {
//     if (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }

//     if (results.length === 0) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }

//     const user = results[0];

//     try {
//       if (ContactNumber === user.ContactNumber) {
//         // Passwords match, authentication successful
//         return res.json({ message: 'Authentication successful' });
//       } else {
//         // Passwords don't match, authentication failed
//         return res.status(401).json({ message: 'Invalid username or password' });
//       }
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Load users from JSON file
const usersData = fs.readFileSync('users.json');
const users = JSON.parse(usersData).users;

// Endpoint for user authentication
app.post('/api/authenticate', (req, res) => {
  const { StudentID, ContactNumber } = req.body;

  const user = users.find(u => u.StudentID === StudentID);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  if (ContactNumber === user.ContactNumber) {
    // Passwords match, authentication successful
    return res.json({ message: 'Authentication successful' });
  } else {
    // Passwords don't match, authentication failed
    return res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
