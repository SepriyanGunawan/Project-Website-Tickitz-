const movieSelect = document.getElementById('movieSelect');
const filterBtn = document.getElementById('filterBtn');
const movieTitle = document.getElementById('movieTitle');
const movieSelect2 = document.getElementById('movieSelect2');
const filterBtn2 = document.getElementById('filterBtn2');
const movieTitle2 = document.getElementById('movieTitle2');

const chartCanvas = document.getElementById('salesChart');
const chartCanvas2 = document.getElementById('tiketSales');

const dummyData = {
  avengers: [300, 400, 700, 500],
  batman: [150, 200, 250, 300],
  joker: [100, 300, 500, 400],
};
const dummyData2 = {
  avengers: [200, 100, 600, 500],
  batman: [50, 60, 200, 100],
  joker: [10, 110, 300, 200],
};

let salesChart = new Chart(chartCanvas, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Sales',
        data: dummyData['avengers'],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.3)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#2563EB',
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  },
});

filterBtn.addEventListener('click', () => {
  const selectedMovie = movieSelect.value;
  salesChart.data.datasets[0].data = dummyData[selectedMovie];
  movieTitle.textContent = movieSelect.options[movieSelect.selectedIndex].text;
  salesChart.update();
});
// cahrt 2 Tiket sales
let salesChart2 = new Chart(chartCanvas2, {
  type: 'line',
  data: {
    labels: ['Mei', 'Jul', 'Jun', 'Agu'],
    datasets: [
      {
        label: 'Sales',
        data: dummyData2['avengers'],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.3)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#2563EB',
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  },
});

filterBtn2.addEventListener('click', () => {
  const selectedMovie2 = movieSelect2.value;
  salesChart2.data.datasets[0].data = dummyData2[selectedMovie2];
  movieTitle2.textContent = movieSelect2.options[movieSelect2.selectedIndex].text;
  salesChart2.update();
});
