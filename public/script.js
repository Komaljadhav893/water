// // document.addEventListener('DOMContentLoaded', () => {
// //   const waterLevelElement = document.getElementById('water-level');
// //   const gateStatusElement = document.getElementById('gate-status');
// //   const alertListElement = document.getElementById('alert-list');
// //   const historyTableBody = document.querySelector('#history-table tbody');

// //   // Simulate fetching data from a server
// //   const fetchData = () => {
// //     return {
// //       waterLevel: Math.random() * 100, // Simulated water level
// //       gateStatus: Math.random() > 0.5 ? 'Open' : 'Closed', // Simulated gate status
// //       alerts: [], // Simulated alerts
// //       historicalData: [
// //         { date: '2024-07-27', waterLevel: 65, gateStatus: 'Open' },
// //         { date: '2024-07-26', waterLevel: 72, gateStatus: 'Closed' },
// //         { date: '2024-07-25', waterLevel: 75, gateStatus: 'Closed' },

// //       ] // Simulated historical data
// //     };
// //   };

// //   // Update the interface with fetched data
// //   const updateInterface = () => {
// //     const data = fetchData();

// //     // Check for critical water levels
// //     if (data.waterLevel > 80) {
// //       data.alerts.push('Critical water level! Immediate action required.');
// //     }

// //     // Check for gate malfunctions (simulate with random chance)
// //     if (Math.random() > 0.95) {
// //       data.alerts.push('Gate malfunction detected!');
// //     }

// //     // Update water level and gate status
// //     waterLevelElement.textContent = data.waterLevel.toFixed(2) + ' cm';
// //     gateStatusElement.textContent = data.gateStatus;

// //     // Update alerts
// //     alertListElement.innerHTML = '';
// //     data.alerts.forEach(alert => {
// //       const li = document.createElement('li');
// //       li.textContent = alert;
// //       alertListElement.appendChild(li);
// //     });

// //     // Update historical data
// //     historyTableBody.innerHTML = '';
// //     data.historicalData.forEach(record => {
// //       const tr = document.createElement('tr');
// //       const dateTd = document.createElement('td');
// //       dateTd.textContent = record.date;
// //       const waterLevelTd = document.createElement('td');
// //       waterLevelTd.textContent = record.waterLevel + ' cm';
// //       const gateStatusTd = document.createElement('td');
// //       gateStatusTd.textContent = record.gateStatus;

// //       tr.appendChild(dateTd);
// //       tr.appendChild(waterLevelTd);
// //       tr.appendChild(gateStatusTd);
// //       historyTableBody.appendChild(tr);
// //     });
// //   };

// //   // Initial update
// //   updateInterface();

// //   // Update every 5 seconds
// //   setInterval(updateInterface, 36000);
// // });


// // // extra
// // const searchButton = document.getElementById('search-button');
// // const searchBar = document.getElementById('search-bar');
// // const damInfoContainer = document.getElementById('dam-info-container');
// // const pieChart = document.getElementById('pie-chart');

// // searchButton.addEventListener('click', async () => {
// //   const damName = searchBar.value;
// //   const response = await fetch(`https://example.com/api/dams/${damName}`);
// //   const data = await response.json();

// //   const waterLevel = data.waterLevel;
// //   const gateStatus = data.gateStatus;
// //   const maxWaterLevelCapacity = data.maxWaterLevelCapacity;

// //   const chartData = {
// //     labels: ['Water Level', 'Gate Status', 'Max Water Level Capacity'],
// //     datasets: [{
// //       label: 'Dam Information',
// //       data: [waterLevel, gateStatus, maxWaterLevelCapacity],
// //       backgroundColor: [
// //         'rgba(255, 99, 132, 0.2)',
// //         'rgba(54, 162, 235, 0.2)',
// //         'rgba(255, 206, 86, 0.2)',
// //       ],
// //       borderColor: [
// //         'rgba(255, 99, 132, 1)',
// //         'rgba(54, 162, 235, 1)',
// //         'rgba(255, 206, 86, 1)',
// //       ],
// //       borderWidth: 1
// //     }]
// //   };

// //   const chartOptions = {
// //     title: {
// //       display: true,
// //       text: 'Dam Information'
// //     },
// //     scales: {
// //       yAxes: [{
// //         ticks: {
// //           beginAtZero: true
// //         }
// //       }]
// //     }
// //   };

// //   const chart = new Chart(pieChart, {
// //     type: 'pie',
// //     data: chartData,
// //     options: chartOptions
// //   });

// //   damInfoContainer.style.display = 'block';
// // });
// document.addEventListener('DOMContentLoaded', () => {
//   const waterLevelElement = document.getElementById('water-level');
//   const gateStatusElement = document.getElementById('gate-status');
//   const alertListElement = document.getElementById('alert-list');
//   const historyTableBody = document.querySelector('#history-table tbody');

//   // Simulate fetching data from a server
//   const fetchData = () => {
//     return {
//       waterLevel: Math.random() * 100, // Simulated water level
//       gateStatus: Math.random() > 0.5 ? 'Open' : 'Closed', // Simulated gate status
//       alerts: [], // Simulated alerts
//       historicalData: [
//         {gate:'12', date: '2024-07-27', waterLevel: 65, gateStatus: 'Open' },
//         { date: '2024-07-26', waterLevel: 72, gateStatus: 'Closed' },
//         { date: '2024-07-25', waterLevel: 75, gateStatus: 'Closed' },
//       ] // Simulated historical data
//     };
//   };

//   // Update the interface with fetched data
//   const updateInterface = () => {
//     const data = fetchData();

//     // Check for critical water levels
//     if (data.waterLevel > 80) {
//       data.alerts.push('Critical water level! Immediate action required.');
//     }

//     // Check for gate malfunctions (simulate with random chance)
//     if (Math.random() > 0.95) {
//       data.alerts.push('Gate malfunction detected!');
//     }

//     // Update water level and gate status
//     waterLevelElement.textContent = data.waterLevel.toFixed(2) + ' cm';
//     gateStatusElement.textContent = data.gateStatus;

//     // Update alerts
//     alertListElement.innerHTML = '';
//     data.alerts.forEach((alert) => {
//       const li = document.createElement('li');
//       li.textContent = alert;
//       alertListElement.appendChild(li);
//     });

//     // Update historical data
//     historyTableBody.innerHTML = '';
//     data.historicalData.forEach((record) => {
//       const tr = document.createElement('tr');
//       const dateTd = document.createElement('td');
//       dateTd.textContent = record.date;
//       const waterLevelTd = document.createElement('td');
//       waterLevelTd.textContent = record.waterLevel + ' cm';
//       const gateStatusTd = document.createElement('td');
//       gateStatusTd.textContent = record.gateStatus;

//       tr.appendChild(dateTd);
//       tr.appendChild(waterLevelTd);
//       tr.appendChild(gateStatusTd);
//       historyTableBody.appendChild(tr);
//     });
//   };

//   // Initial update
//   updateInterface();

//   // Update every 5 seconds
//   setInterval(updateInterface, 36000);

//   // Search functionality
//   const searchButton = document.getElementById('search-button');
//   const searchBar = document.getElementById('search-bar');
//   const damInfoContainer = document.getElementById('dam-info-container');
//   const pieChart = document.getElementById('pie-chart');

//   searchButton.addEventListener('click', async () => {
//     const damName = searchBar.value;
//     const response = await fetch(`https://example.com/api/dams/${damName}`);
//     const data = await response.json();

//     const waterLevel = data.waterLevel;
//     const gateStatus = data.gateStatus;
//     const maxWaterLevelCapacity = data.maxWaterLevelCapacity;

//     const chartData = {
//       labels: ['Water Level', 'Gate Status', 'Max Water Level Capacity'],
//       datasets: [{
//         label: 'Dam Information',
//         data: [waterLevel, gateStatus, maxWaterLevelCapacity],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//         ],
//         borderWidth: 1
//       }]
//     };

//     const chartOptions = {
//       title: {
//         display: true,
//         text: 'Dam Information'
//       },
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     };

//     const chart = new Chart(pieChart, {
//       type: 'pie',
//       data: chartData,
//       options: chartOptions
//     });

//     damInfoContainer.style.display = 'block';
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  const searchBar = document.getElementById('search-bar');
  const damInfoContainer = document.getElementById('dam-info-container');
  const pieChart = document.getElementById('pie-chart').getContext('2d');

  async function fetchHistoricalData() {
    try {
      const response = await fetch('/historical-data');
      const data = await response.json();
      const historyTableBody = document.getElementById('history-table-body');
      historyTableBody.innerHTML = '';
      data.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${entry.date}</td><td>${entry.waterLevel} cm</td><td>${entry.gateStatus}</td>`;
        historyTableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  }

  async function updateInterface() {
    try {
      const response = await fetch('/historical-data');
      const data = await response.json();
      const latestData = data[0];
      document.getElementById('water-level').textContent = `${latestData.waterLevel} cm`;
      document.getElementById('gate-status').textContent = latestData.gateStatus;

      const alertList = document.getElementById('alert-list');
      alertList.innerHTML = '';
      if (latestData.waterLevel > 90) {
        const alertItem = document.createElement('li');
        alertItem.textContent = `Critical water level alert: ${latestData.waterLevel} cm`;
        alertList.appendChild(alertItem);
      }
    } catch (error) {
      console.error('Error updating interface:', error);
    }
  }

  searchButton.addEventListener('click', async () => {
    const damName = searchBar.value.trim();
    if (!damName) {
      alert('Please enter a dam name');
      return;
    }

    try {
      const response = await fetch(`/api/dams/${damName}`);
      if (response.ok) {
        const dam = await response.json();
        document.getElementById('dam-name').textContent = `Dam Name: ${dam.name}`;
        document.getElementById('dam-location').textContent = `Location: ${dam.location}`;
        document.getElementById('number-of-gates').textContent = `Number of Gates: ${dam.numberOfGates}`;
        document.getElementById('max-water-level').textContent = `Max Water Level: ${dam.maxWaterLevel} cm`;
        document.getElementById('current-water-level').textContent = `Current Water Level: ${dam.currentWaterLevel} cm`;
        damInfoContainer.style.display = 'block';

        const waterLevelRatio = (dam.currentWaterLevel / dam.maxWaterLevel) * 100;
        const pieData = {
          labels: ['Current Water Level', 'Remaining Capacity'],
          datasets: [{
            data: [waterLevelRatio, 100 - waterLevelRatio],
            backgroundColor: ['#42A5F5', '#FF7043']
          }]
        };

        new Chart(pieChart, {
          type: 'pie',
          data: pieData
        });
      } else {
        damInfoContainer.style.display = 'none';
        alert('Dam not found');
      }
    } catch (error) {
      console.error('Error fetching dam information:', error);
      damInfoContainer.style.display = 'none';
      alert('Error fetching dam information');
    }
  });

  updateInterface();
  fetchHistoricalData();
  setInterval(updateInterface, 60000); // Refresh data every minute
});
