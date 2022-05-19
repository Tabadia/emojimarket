common = document.getElementById('common').innerHTML;
uncommon = document.getElementById('uncommon').innerHTML;
rare = document.getElementById('rare').innerHTML;
epic = document.getElementById('epic').innerHTML;
legendary = document.getElementById('legendary').innerHTML;


function search(){
    input = document.getElementById('input').value;
    input = input.substring(input.length - 1);
    document.getElementById('input').value = input;
    input = input + " ";
    console.log(input);

    if(input.length <= 0){
        document.getElementById('result').innerHTML = "Result"
    }

    else if(legendary.includes(input)) {
        document.getElementById('result').innerHTML = 'Legendary';
    }

    else if(epic.includes(input)) {
        document.getElementById('result').innerHTML = 'Epic';
    }

    else if(rare.includes(input)) {
        document.getElementById('result').innerHTML = 'Rare';
    }

    else if(uncommon.includes(input)) {
        document.getElementById('result').innerHTML = 'Uncommon';
    }
    
    else if(common.includes(input)) {
        document.getElementById('result').innerHTML = 'Common';
    }
    

    else{
        document.getElementById('result').innerHTML = "Emoji not found"
    }
    

}