// const express = require('express');
// const nodemailer = require('nodemailer');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 3000;

// // Serve static files from the "public" directory
// app.use(express.static('public'));

// // Body-parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Nodemailer configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'komaljadav2593@gmail.com',         // Replace with your actual email
//     pass: 'qxgg zhso lclq cdxg'             // Replace with the 16-character App Password
//   }
// });

// const sendMail = (subject, text) => {
//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'recipient-email@gmail.com',
//     subject,
//     text
//   };

 

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// };

// // Endpoint to get historical data
// app.get('/historical-data', (req, res) => {
//   fs.readFile('data.json', (err, data) => {
//     if (err) throw err;
//     res.json(JSON.parse(data));
//   });
// });
// // Endpoint to trigger email alerts
// app.post('/send-alert', (req, res) => {
//   const subject = req.body.subject;
//   const text = req.body.text;

//   sendMail(subject, text);
//   res.send('Alert email sent!');
// });

// // Simulated function to fetch data and update the interface
// const fetchData = () => {
//   return {
//     waterLevel: Math.random() * 100, // Simulated water level
//     gateStatus: Math.random() > 1? 'Open' : 'Closed', // Simulated gate status
//     alerts: [], // Simulated alerts
//     historicalData: JSON.parse(fs.readFileSync('data.json')) // Load historical data from file
//   };
// };

// // Update the interface with fetched data
// const updateInterface = () => {
//   const data = fetchData();

//   // Check for critical water levels
//   if (data.waterLevel > 80) {
//     data.alerts.push('Critical water level! Immediate action required.');
//     sendMail('Critical Water Level Alert', 'The water level has exceeded the critical threshold.');
//   }

//   // Check for gate malfunctions (simulate with random chance)
//   if (Math.random() > 0.95) {
//     data.alerts.push('Gate malfunction detected!');
//     sendMail('Gate Malfunction Alert', 'A gate malfunction has been detected.');
//   }

//   // Additional logic to update the interface would go here...
// };

// // Simulate periodic updates
// setInterval(updateInterface, 5000);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// const fs = require('fs');
// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const PORT = 3000;

// app.use(express.static('public'));

// // Endpoint to get historical data
// app.get('/historical-data', (req, res) => {
//   fs.readFile('data.json', (err, data) => {
//     if (err) {
//       res.status(500).send('Error reading data');
//     } else {
//       const jsonData = JSON.parse(data);
//       res.json(jsonData.historicalData);
//     }
//   });
// });

// // Endpoint to get dam information by name
// app.get('/api/dams/:name', (req, res) => {
//   const damName = req.params.name;
//   fs.readFile('data.json', (err, data) => {
//     if (err) {
//       res.status(500).send('Error reading data');
//     } else {
//       const jsonData = JSON.parse(data);
//       const dam = jsonData.dams.find(d => d.name.toLowerCase() === damName.toLowerCase());
//       if (dam) {
//         res.json(dam);
//       } else {
//         res.status(404).send('Dam not found');
//       }
//     }
//   });
// });

// // Configure nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'komaljadav2593@gmail.com',
//     pass: 'qrni kiat kebv ccsx'
//   }
// });

// // Function to send email reports
// const sendEmailReport = () => {
//   fs.readFile('data.json', (err, data) => {
//     if (err) {
//       console.error('Error reading data for email:', err);
//       return;
//     }

//     const jsonData = JSON.parse(data);
//     const damReports = jsonData.dams.map(dam => `
//       <h3>${dam.name}</h3>
//       <p>Location: ${dam.location}</p>
//       <p>Number of Gates: ${dam.numberOfGates}</p>
//       <p>Max Water Level: ${dam.maxWaterLevel} cm</p>
//       <p>Current Water Level: ${dam.currentWaterLevel} cm</p>
//     `).join('');

//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: 'recipient-email@gmail.com',
//       subject: 'Daily Dam Report',
//       html: `<h2>Daily Dam Report</h2>${damReports}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//       } else {
//         console.log('Email sent:', info.response);
//       }
//     });
//   });
// };

// // Send email report every day at 8am
// setInterval(sendEmailReport, 24 * 60 * 60 * 1000);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const fs = require('fs');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

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
