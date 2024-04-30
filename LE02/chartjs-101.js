"use strict";

// prepare data 
let my_data = {}


// specify config information
const config = {
    type: 'bar',
    data: my_data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: "My_title",
        }
      }
    }
  }

const my_chart = new Chart(document.getElementById('myChart'), config)

return bar_chart // if you want to reuse it, e.g. in another funciton