let salesChart = null;

/**
 * Initialize the sales chart
 * @param {string} canvasId - The ID of the canvas element
 * @param {Array} labels - The X-axis labels
 * @param {Array} data - The data points
 */
export function initSalesChart(canvasId, labels, data) {
  const ctx = document.getElementById(canvasId).getContext("2d");

  salesChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Sales ($)",
          data: data,
          fill: true,
          tension: 0.4,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          pointBackgroundColor: "#fff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Sales Overview",
          font: {
            size: 18,
          },
        },
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

/**
 * Update chart data
 * @param {Array} newLabels - New X-axis labels
 * @param {Array} newData - New dataset
 */
export function updateSalesChart(newLabels, newData) {
  if (salesChart) {
    salesChart.data.labels = newLabels;
    salesChart.data.datasets[0].data = newData;
    salesChart.update();
  }
}
