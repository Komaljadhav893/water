
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const searchBar = document.getElementById("search-bar");
  const damInfoContainer = document.getElementById("dam-info-container");
  // The pieChart variable is likely used to render a pie chart on the element with the id "pie-chart".
  const pieChart = document.getElementById("pie-chart").getContext("2d");
  

  async function fetchHistoricalData() {
    try {
      const response = await fetch("/historical-data");
      const data = await response.json();
      const historyTableBody = document.getElementById("history-table-body");
      historyTableBody.innerHTML = "";
      data.forEach((entry) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${entry.date}</td><td>${entry.waterLevel} cm</td><td>${entry.gateStatus1}</td><td>${entry.gateStatus2}</td><td>${entry.gateStatus3}</td>`;
        historyTableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  }

  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Get all navbar links
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add click event listener to each navbar link
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Get the target element's ID from the href attribute
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element with an offset of 10px above
        if (targetElement) {
          const offsetPosition = targetElement.offsetTop - 10;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  });

  async function updateInterface() {
    try {
      const response = await fetch("/historical-data");
      const data = await response.json();
      const latestData = data[0];
      document.getElementById(
        "water-level"
        // it will display latest data on webframe
      ).textContent = `${latestData.waterLevel} cm`;
      document.getElementById("gate-status").textContent =
        latestData.gateStatus;

      const alertList = document.getElementById("alert-list");
      // update alerts based on water
      alertList.innerHTML = "";
      if (latestData.waterLevel > 90) {
        const alertItem = document.createElement("li");
        alertItem.textContent = `Critical water level alert: ${latestData.waterLevel} cm`;
        alertList.appendChild(alertItem);
      }
    } catch (error) {
      console.error("Error updating interface:", error);
    }
  }

  searchButton.addEventListener("click", async () => {
    const damName = searchBar.value.trim();
    if (!damName) {
      alert("Please enter a dam name");
      return;
    }

    try {
      const response = await fetch(`/api/dams/${damName}`);
      if (response.ok) {
        const dam = await response.json();
        document.getElementById(
          "dam-name"
        ).textContent = `Dam Name: ${dam.name}`;
        document.getElementById("dam-name").style.color = "blanchedalmond";
        document.getElementById(
          "dam-location"
        ).textContent = `Location: ${dam.location}`;
        document.getElementById("dam-location").style.color = "blanchedalmond";
        document.getElementById(
          "number-of-gates"
        ).textContent = `Number of Gates: ${dam.numberOfGates}`;
        document.getElementById("number-of-gates").style.color =
          "blanchedalmond";
        document.getElementById(
          "max-water-level"
        ).textContent = `Max Water Level: ${dam.maxWaterLevel} cm`;
        document.getElementById("max-water-level").style.color =
          "blanchedalmond";
        document.getElementById(
          "current-water-level"
        ).textContent = `Current Water Level: ${dam.currentWaterLevel} cm`;
        document.getElementById("current-water-level").style.color =
          "blanchedalmond";
        damInfoContainer.style.display = "block";

        const waterLevelRatio =
          (dam.currentWaterLevel / dam.maxWaterLevel) * 100;
        const pieData = {
          labels: ["Current Water Level", "Remaining Capacity"],
          datasets: [
            {
              data: [waterLevelRatio, 100 - waterLevelRatio],
              backgroundColor: ["#42A5F5", "#FF7043"],
            },
          ],
        };

        new Chart(pieChart, {
          type: "pie",
          data: pieData,
        });
      } else {
        damInfoContainer.style.display = "none";
        alert("Dam not found");
      }
    } catch (error) {
      console.error("Error fetching dam information:", error);
      damInfoContainer.style.display = "none";
      alert("Error fetching dam information");
    }
  });

  updateInterface();
  fetchHistoricalData();
  setInterval(updateInterface, 60000); // Refresh data every minute
});
// pie chart
