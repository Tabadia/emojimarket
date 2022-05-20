var trophy = document.getElementsByClassName("trophy");

function search(){
    input = document.getElementById('input').value;
    input = input.toLowerCase();
    for (var i = 0; i < trophy.length; i++) {
        var trophyTitle = trophy.item(i).innerHTML.toLowerCase();
        var trophyClass = trophy.item(i).classList;
        if(trophyTitle.includes(input)){
            if(trophyClass.toString().includes("hidden")){
                trophyClass.remove("hidden");
            }
            console.log(trophyTitle);
        }
        else{
            trophyClass.add("hidden");
        }
     }
}
