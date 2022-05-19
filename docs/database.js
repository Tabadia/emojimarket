const splitter = new jQuery.getScript("grapheme.js", function () {
    GraphemeSplitter();
});
common = document.getElementById('common').innerHTML;
uncommon = document.getElementById('uncommon').innerHTML;
rare = document.getElementById('rare').innerHTML;
epic = document.getElementById('epic').innerHTML;
legendary = document.getElementById('legendary').innerHTML;

function removeSpaces(string) {
    return string.split(' ').join('');
   }

function search() {
    input = document.getElementById('input').value;
    document.getElementById('input').value = document.getElementById('input').value.replaceAll(" ", "");
    console.log(splitter.countGraphemes(input));
    if (splitter.countGraphemes(input) < 1) {
        document.getElementById('result').innerHTML = "Rarity"
    }
    else if (splitter.countGraphemes(input) = 1){
        document.getElementById('input').value = document.getElementById('input').value.substring(input.length-2);
        input = document.getElementById('input').value;
    }
    else if (input.length >= 3) {
        document.getElementById('input').value = document.getElementById('input').value.substring(input.length-3);
        input = document.getElementById('input').value;
    }
    console.log(input);
    input = input + " ";
    document.getElementById('result').innerHTML = "Rarity"
    console.log(input.length);

    if (legendary.includes(input)) {
        if (input.length > 1)
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