
var month = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var twoWeek = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var week = [1,2,3,4,5,6,7];

var yValues = Array.from({length: 30}, () => Math.floor(Math.random() * 100));
var lineValues = Array.from({length: 30}, () => Math.floor(Math.random() * 100));
var pieValues = Array.from({length: 5}, () => Math.floor(Math.random() * 100));

Chart.defaults.global.defaultFontColor = 'white';

var monthChart = new Chart("monthChart", {
  type: "bar",
  data: {
    labels: twoWeek,
    
    datasets: [
      {
        label: 'Average',
        type: 'line',
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,0,1.0)",
        borderColor: "rgba(0,0,0,0.7)",
        data: lineValues,
        stack: 'combined',
      },
      {
      label: 'Emoji',
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(255,255,255,1.0)",
      borderColor: "rgba(255,255,255,0.5)",
      data: yValues,
      stack: 'combined',
    },]
  },

  options: {
    legend: {
      labels: {
        fontColor: "white",
    }},
    scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Trades',
            min: 0,
            suggestedMax: 35},
          ticks: {
            fontColor: "white",
          },
          },],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Days',
            min: 0,
            max: twoWeek,
          },
          ticks: {
            fontColor: "white",
          },
          },],}
        }
})

var pieChart = new Chart("pieChart", {
  type: "pie",
  data: {
    labels: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],   
    datasets: [
      {
        type: 'pie',
        backgroundColor: [
          "#DDDDDD",
          "#00CC00",
          "#2087FF",
          "#9537FF",
          "#FF8700",
        ],

        data: pieValues,
      },]
  },

  options: {
    legend: {
      labels: {
        fontColor: "white",
      }
    },
  }
})

function selected() {
  var time = document.getElementById('ti');
  console.log(time.value)
  if (time.value = "7") {
  }

  else if (time.value = "14") {
  }

  else if (time.value = "30") {
  }
}