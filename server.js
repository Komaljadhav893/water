// This line imports the fs (File System) module, which provides an API for interacting with the file system
const fs = require('fs');
// It simplifies the process of handling HTTP requests and responses.
const express = require('express');
// This line imports the nodemailer module, which is a module for Node.js applications to allow easy email sending.
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;
// This line sets up the Express application to serve static files from the public directory. Any files in this directory can be accessed directly via HTTP requests. 
app.use(express.static('public'));

// Endpoint to get historical data
app.get('/historical-data', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData.historicalData);
    }
  });
});

// Endpoint to get dam information by name
app.get('/api/dams/:name', (req, res) => {
  const damName = req.params.name;
  fs.readFile('data.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      const jsonData = JSON.parse(data);
      const dam = jsonData.dams.find(d => d.name.toLowerCase() === damName.toLowerCase());
      if (dam) {
        res.json(dam);
      } else {
        res.status(404).send('Dam not found');
      }
    }
  });
});

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'komaljadav2593@gmail.com',
    pass: 'qrni kiat kebv ccsx'
  }
});

// Function to send email reports
const sendEmailReport = () => {
  fs.readFile('data.json', (err, data) => {
    if (err) {
      console.error('Error reading data for email:', err);
      return;
    }

    const jsonData = JSON.parse(data);
    const damReports = jsonData.dams.map(dam => `
      <h3>${dam.name}</h3>
      <p>Location: ${dam.location}</p>
      <p>Number of Gates: ${dam.numberOfGates}</p>
      <p>Max Water Level: ${dam.maxWaterLevel} cm</p>
      <p>Current Water Level: ${dam.currentWaterLevel} cm</p>
    `).join('');

    const mailOptions = {
      from: 'komaljadav2593@gmail.com',
      to: 'prashant.sagar.shakya@gmail.com',
      subject: 'Daily Dam Report',
      html: `<h2>Daily Dam Report</h2>${damReports}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  });
};

// Send email report immediately
sendEmailReport();

// Send email report every 5 minutes
setInterval(sendEmailReport, 60 * 60 * 1000); // Every 60 minutes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
