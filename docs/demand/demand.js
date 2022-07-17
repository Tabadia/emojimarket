splitter = GraphemeSplitter();

var month = [30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
let emoji = '🍆'
var yValues = [ 6, 4, 2, 0, 2, 1, 1, 0, 3, 2, 5, 0, 0, 0, 2, 2, 0, 0, 3, 2, 4, 1, 8, 10, 5, 4, 2, 3, 2, 5
]
var lineValues = [1.876211593284764, 2.1530830957660223, 2.2052000844683772, 1.833866539964101, 2.0325625593918275, 1.570024284658431, 1.9934748178650619, 1.9706736353077818, 1.9413578291627072, 1.7263752507654946, 1.876211593284764, 1.446246436490339, 1.4690476190476192, 1.4853341780171048, 2.806324569739204, 2.736923239362264, 2.475842044134727, 1.687287509238729, 2.0065040650406503, 1.4723049308415161, 1.8306092281702038, 1.9934748178650619, 2.2182293316439656, 1.9348432055749132, 2.5504751346214762, 1.736147186147186, 2.1335392250026395, 2.742656530461409, 2.2931475029036004, 2.8436331960722208]
var pieValues = [0,0,0,0,0];
var now = new Date();
var fullDaysSinceEpoch = Math.floor(now/8.64e7);

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
    
}

loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { graph(data)}, function(xhr) { console.error(xhr); });

function search(){

  input = document.getElementById('input').value.replaceAll(" ", "")
  document.getElementById('input').value = document.getElementById('input').value.replaceAll(" ", "")
  grapheme = splitter.splitGraphemes(input)[splitter.splitGraphemes(input).length-1]
  emojiLength = grapheme.length
  if (splitter.countGraphemes(input) < 1) {
      return
  }
  else if (splitter.countGraphemes(input) == 2 && input.includes("❤️‍🔥")) {
      input = document.getElementById('input').value;
  }
  else {
      document.getElementById('input').value = document.getElementById('input').value.substring(input.length-emojiLength);
      input = document.getElementById('input').value;
  }
  //console.log(input);
  emoji = input;
  loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { run(data)}, function(xhr) { console.error(xhr); });

}




function run(d) {
  let times = []
  let yValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let [key, value] of Object.entries(d)) {
    if (key == emoji){
      for (time of value["trade times"]) {
        time = Math.floor(time/86400)
        time = time - (fullDaysSinceEpoch - 30)
        if (time < 30) {
          times.push(time)
        }
      }
    }
      
  }
  for (i = 0; i < times.length; i++) {
    let temp = times[i]
    times.slice(i);
    if (times.includes(temp)) {
      yValues[temp] += 1;
    }
    else {
      yValues[temp] += 0;
    }
  }
  monthChart.data.datasets[1].data = yValues;
  monthChart.update();
  

}


function graph(d){
  Chart.defaults.global.defaultFontColor = 'white';
  monthChart.data.datasets[1].data = yValues;
  monthChart.update();
  
  let times = []
  for (let [key, value] of Object.entries(d)) {
    if (key == emoji){
      for (time of value["trade times"]) {
        time = Math.floor(time/86400)
        time = time - (fullDaysSinceEpoch - 30)
        if (time < 30) {
          times.push(time)
        }
      }
    }
      
  }
  for (i = 0; i < times.length; i++) {
    let temp = times[i]
    times.slice(i);
    if (times.includes(temp)) {
      yValues[temp] += 1;
    }
    else {
      yValues[temp] += 0;
    }
  }

  var commonAmt = 0
  var uncommonAmt = 0
  var rareAmt = 0
  var epicAmt = 0
  var legendaryAmt = 0
  for (let value of Object.values(d)) {
    if (value.rarity == "COMMON") {
      commonAmt += value['rough users'].length
    }
    else if (value.rarity == "UNCOMMON") {
      uncommonAmt += value['rough users'].length
    }
    else if (value.rarity == "RARE") {
      rareAmt += value['rough users'].length
    }
    else if (value.rarity == "EPIC") {
      epicAmt += value['rough users'].length
    }
    else if (value.rarity == "LEGENDARY") {
      legendaryAmt += value['rough users'].length
    }
  }
  document.getElementById('total').innerHTML = (commonAmt + uncommonAmt + rareAmt + epicAmt + legendaryAmt)
  pieValues = [commonAmt, uncommonAmt, rareAmt, epicAmt, legendaryAmt]
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
}
  
var monthChart = new Chart("monthChart", {
  type: "bar",
  data: {
    labels: month,
    
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
      label: "Emoji",
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(255,255,255,1.0)",
      borderColor: "rgba(255,255,255,0.5)",
      data: yValues,
      stack: 'combined',
    },]
  },

  options: {
    responsive: true,
    maintainAspectRatio: true,
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
          max: month,
        },
        ticks: {
          fontColor: "white",
        },
      },],
    }
  }
})




  /*times = []
  for (let [key, value] of Object.entries(d)) {
      for (time of value["trade times"]) {
        time = Math.floor(time/86400)
        time = time - (fullDaysSinceEpoch - 30)
        if (time < 30) {
          times.push(time)
        }
    }
  }
  for (i = 0; i < times.length; i++) {
    let temp = times[i]
    times.slice(i);
    if (times.includes(temp)) {
      lineValues[temp] += 1;
    }
    else {
      lineValues[temp] += 0;
    }

  }
  for (i = 0; i < yValues.length; i++) {
    lineValues[i] = lineValues[i]/615;
  }
  console.log(lineValues)*/