"use strict";

// prepare data 
//let my_data = {}

let my_data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
  }]
}


// specify config information
const config = {
    type: 'bar',
    data: my_data, // data defined here
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

//return bar_chart // if you want to reuse it, e.g. in another funciton