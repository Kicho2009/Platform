new Chart(powerChart, {
  type: 'line',
  data: {
    labels: ['9am','12pm','2pm','4pm','6pm','8pm','9pm'],
    datasets: [{
      data: [120,600,500,900,700,500,700],
      borderColor: '#67e8f9',
      tension: 0.4
    }]
  },
  options: { plugins: { legend: { display: false } } }
});

new Chart(tempChart, {
  type: 'bar',
  data: {
    labels: ['9am','12pm','2pm','6pm'],
    datasets: [{
      data: [24,29,34,23],
      backgroundColor: '#67e8f9'
    }]
  },
  options: { plugins: { legend: { display: false } } }
});

new Chart(airChart, {
  type: 'line',
  data: {
    labels: ['9am','12pm','2pm','4pm','6pm','8pm'],
    datasets: [{
      data: [18,26,23,35,37,23],
      borderColor: '#67e8f9',
      tension: 0.4
    }]
  },
  options: { plugins: { legend: { display: false } } }
});

new Chart(pieChart, {
  type: 'pie',
  data: {
    labels: ['Loss','Profit','Usage'],
    datasets: [{
      data: [71.4,14.3,14.3],
      backgroundColor: ['#67e8f9','#38bdf8','#0ea5e9']
    }]
  }
});
