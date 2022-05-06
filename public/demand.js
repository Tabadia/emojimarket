var xValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var yValues = Array.from({length: 30}, () => Math.floor(Math.random() * 100));
var lineValues = Array.from({length: 30}, () => Math.floor(Math.random() * 100));
var pieValues = [1,2,3,4,5]

const barChart = new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    
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
    legend: {},
    scales: {
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Trades'},
                min: 0,
                suggestedMax: 35,
            },],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Days',}
            },],}
        }
})

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],   
    datasets: [
      {
        type: 'pie',

        data: pieValues,
      },]
  },

  options: {
  }
})


function select() {
  var time = document.getElementById('ti');
  console.log(time.value)
  if (time.value = "7") {
    xValues = [1,2,3,4,5,6,7];
    barChart.update();
  }
}