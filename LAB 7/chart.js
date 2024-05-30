const sampleData = {
  labels: ['Spark Plug', 'Rear Fender', 'Front Fender', 'Side Mirror', 'Handle Grip', 'Belt', 'Seat', 'LED Headlight'],
  datasets: [{
    label: 'Motor Parts',
    data: [100, 580, 580, 781, 200, 524, 1400, 250],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)'
    ],
    borderWidth: 1
  }]
};

const ctx = document.getElementById('myChart').getContext('2d');
let currentChart;

function renderChart(type) {
  if (currentChart) {
    currentChart.destroy();
  }
  
  currentChart = new Chart(ctx, {
    type: type,
    data: sampleData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function changeChartType(type) {
  renderChart(type);
}

renderChart('bar');