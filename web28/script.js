import { initSalesChart, updateSalesChart } from "./chart.js";

// Initial dummy data
const initialLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const initialData = [1200, 1900, 3000, 500, 2000, 3000, 4500];

// Initialize chart on load
initSalesChart("salesChart", initialLabels, initialData);

// Handle dropdown to simulate data updates
document.getElementById("date-range").addEventListener("change", function (e) {
  let newLabels, newData;

  switch (e.target.value) {
    case "Last 30 Days":
      newLabels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
      newData = Array.from({ length: 30 }, () =>
        Math.floor(Math.random() * 5000)
      );
      break;
    case "This Year":
      newLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
      newData = [9000, 12000, 10000, 8500, 15000, 17000, 18000];
      break;
    default:
      newLabels = initialLabels;
      newData = initialData;
  }

  updateSalesChart(newLabels, newData);
});
