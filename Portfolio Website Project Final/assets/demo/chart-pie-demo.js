// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Spark Plug', 'Rear Fender', 'Front Fender', 'Side Mirror', 'Handle Grip', 'Belt', 'Seat', 'LED Headlight'],
    datasets: [{
      data: [100, 580, 580, 781, 200, 524, 1400, 250],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745','#FFADAD','#B4EAFF','#9FFFEA','#668722'],
    }],
  },
});
