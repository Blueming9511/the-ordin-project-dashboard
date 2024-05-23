// check percent
const percent = document.querySelectorAll('.percent')
percent.forEach(item => {
  const value = item.innerText
  const regex = /([+-])\d+\.\d+%/ // Matches operator (+ or -), digits, decimal point, and percentage sign
  const match = value.match(regex)

  if (match) {
    const operator = match[1] // Access the captured operator group (index 1)
    if (operator == '-') {
      item.style.color = 'rgb(161, 8, 8)'
      item.style.backgroundColor = ' rgba(240, 128, 128, 0.263)'
    } else {
      item.style.color = 'green'
      item.style.backgroundColor = 'rgba(144, 238, 144, 0.382)'
    }
  } else {
    console.log('No operator found')
  }
})

// Total sales

let ctx = document.getElementById('myChart').getContext('2d')
let labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let data = {
  labels: labels,
  datasets: [
    {
      label: 'Total Sales (USD)',
      backgroundColor:
        'linear-gradient(180deg, rgba(255,112,112,1) 1%, rgba(233,148,148,0) 100%)',
      borderColor: 'red',
      data: [1000, 1500, 2000, 2500, 1800, 2200, 1200]
    }
  ]
}

let myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
})

// profits values

// Profits values
ctx = document.getElementById('profitValueChart').getContext('2d')
labels = ['Direct', 'Sponsored', 'Affiliate']
data = [40, 24, 36]
colors = ['purple', 'orange', 'blue']

const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Profit Channels',
        data: data,
        backgroundColor: colors,
        borderColor: 'rgb(30, 2, 96)',
        // New property to position labels below the chart
        pointLabelPosition: 'bottom'
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      text: 'Profit Value',
      display: true
    },
    legend: {
      display: true,
      position: 'bottom' // Legend position can be adjusted as needed
    },
  }
})


var notif = document.querySelector(".notification");
var noti_panel = document.querySelector(".noti-panel");
notif.addEventListener("click", ()=>{
    noti_panel.classList.toggle("active");
})