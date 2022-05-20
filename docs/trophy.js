var trophy = document.getElementsByClassName("trophy");

function search(){
    var count = 0;
    input = document.getElementById('input').value;
    input = input.toLowerCase();
    results = document.getElementById('result').innerHTML;
    for (var i = 0; i < trophy.length; i++) {
        var trophyTitle = trophy.item(i).innerHTML.toLowerCase();
        trophyTitle = trophyTitle.replace('<h1 class="trophytitle">', '').replace('<h1 class="trophytxt">', '').replaceAll('</h1>', '')
        var trophyClass = trophy.item(i).classList;
        if(trophyTitle.includes(input)){
            if(trophyClass.toString().includes("hidden")){
                trophyClass.remove("hidden");
            }
            count++;
        }
        else{
            trophyClass.add("hidden");
        }
        document.getElementById('result').innerHTML = count;
     }
}
