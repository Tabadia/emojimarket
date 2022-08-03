splitter = GraphemeSplitter();

common = document.getElementById('common').innerHTML;
uncommon = document.getElementById('uncommon').innerHTML;
rare = document.getElementById('rare').innerHTML;
epic = document.getElementById('epic').innerHTML;
legendary = document.getElementById('legendary').innerHTML;
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

function clear(){
    document.getElementById('rarity1').classList.remove('text-green-500');
    document.getElementById('rarity1').classList.remove('text-red-500');
    document.getElementById('rarity1').classList.remove('text-black');
    document.getElementById('rarity2').classList.remove('text-green-500');
    document.getElementById('rarity2').classList.remove('text-red-500');
    document.getElementById('rarity2').classList.remove('text-black');
    document.getElementById('traded1').classList.remove('text-green-500');
    document.getElementById('traded1').classList.remove('text-red-500');
    document.getElementById('traded1').classList.remove('text-black');
    document.getElementById('traded2').classList.remove('text-green-500');
    document.getElementById('traded2').classList.remove('text-red-500');
    document.getElementById('traded2').classList.remove('text-black');
    document.getElementById('rolled1').classList.remove('text-green-500');
    document.getElementById('rolled1').classList.remove('text-red-500');
    document.getElementById('rolled1').classList.remove('text-black');
    document.getElementById('rolled2').classList.remove('text-green-500');
    document.getElementById('rolled2').classList.remove('text-red-500');
    document.getElementById('rolled2').classList.remove('text-black');
    document.getElementById('discard1').classList.remove('text-green-500');
    document.getElementById('discard1').classList.remove('text-red-500');
    document.getElementById('discard1').classList.remove('text-black');
    document.getElementById('discard2').classList.remove('text-green-500');
    document.getElementById('discard2').classList.remove('text-red-500');
    document.getElementById('discard2').classList.remove('text-black');
    document.getElementById('held1').classList.remove('text-green-500');
    document.getElementById('held1').classList.remove('text-red-500');
    document.getElementById('held1').classList.remove('text-black');
    document.getElementById('held2').classList.remove('text-green-500');
    document.getElementById('held2').classList.remove('text-red-500');
    document.getElementById('held2').classList.remove('text-black');
    document.getElementById('LheldRank1').classList.remove('text-green-500');
    document.getElementById('LheldRank1').classList.remove('text-red-500');
    document.getElementById('LheldRank1').classList.remove('text-black');
    document.getElementById('LheldRank2').classList.remove('text-green-500');
    document.getElementById('LheldRank2').classList.remove('text-red-500');
    document.getElementById('LheldRank2').classList.remove('text-black');
    document.getElementById('MtradedRank1').classList.remove('text-green-500');
    document.getElementById('MtradedRank1').classList.remove('text-red-500');
    document.getElementById('MtradedRank1').classList.remove('text-black');
    document.getElementById('MtradedRank2').classList.remove('text-green-500');
    document.getElementById('MtradedRank2').classList.remove('text-red-500');
    document.getElementById('MtradedRank2').classList.remove('text-black');

    document.getElementById('rarity1').innerHTML = '???'
    document.getElementById('rarity2').innerHTML = '???'
    document.getElementById('traded1').innerHTML = '???'
    document.getElementById('traded2').innerHTML = '???'
    document.getElementById('rolled1').innerHTML = '???'
    document.getElementById('rolled2').innerHTML = '???'
    document.getElementById('discard1').innerHTML = '???'
    document.getElementById('discard2').innerHTML = '???'
    document.getElementById('held1').innerHTML = '???'
    document.getElementById('held2').innerHTML = '???'
    document.getElementById('LheldRank1').innerHTML = '???'
    document.getElementById('LheldRank2').innerHTML = '???'
    document.getElementById('MtradedRank1').innerHTML = '???'
    document.getElementById('MtradedRank2').innerHTML = '???'
}

loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { load(data)}, function(xhr) { console.error(xhr); });

function load(d) {
    document.getElementById('common').innerHTML = '';
    document.getElementById('uncommon').innerHTML = '';
    document.getElementById('rare').innerHTML = '';
    document.getElementById('epic').innerHTML = '';
    document.getElementById('legendary').innerHTML = '';
    for (let [key, value] of Object.entries(d)) {
        if (value.rarity == "COMMON"){
            document.getElementById('common').innerHTML += key;
        }
        else if (value.rarity == "UNCOMMON"){
            document.getElementById('uncommon').innerHTML += key;
        }
        else if (value.rarity == "RARE"){
            document.getElementById('rare').innerHTML += key;
        }
        else if (value.rarity == "EPIC"){
            document.getElementById('epic').innerHTML += key;
        }
        else if (value.rarity == "LEGENDARY"){
            document.getElementById('legendary').innerHTML += key;
        }
    }
}

function removeSpaces(string) {
    return string.split(' ').join('');
   }
function search() {
    input = document.getElementById('input').value.replaceAll(" ", "")
    document.getElementById('input').value = document.getElementById('input').value.replaceAll(" ", "")
    grapheme = splitter.splitGraphemes(input)[splitter.splitGraphemes(input).length-1]
    emojiLength = grapheme.length
    if (splitter.countGraphemes(input) < 1) {
        document.getElementById('rarity').innerHTML = "???"
    }
    else if (splitter.countGraphemes(input) == 2 && input.includes("❤️‍🔥")) {
        input = document.getElementById('input').value;
    }
    else {
        document.getElementById('input').value = document.getElementById('input').value.substring(input.length-emojiLength);
        input = document.getElementById('input').value;
    }
    
    //console.log(input);
    //RARITY
    document.getElementById('rarity').innerHTML = "???"
    //console.log(input.length);
    if (legendary.includes(input)) {
        if (input.length > 1)
            document.getElementById('rarity').innerHTML = 'Legendary';
    }
    else if(epic.includes(input)) {
        document.getElementById('rarity').innerHTML = 'Epic';
    }
    else if(rare.includes(input)) {
        document.getElementById('rarity').innerHTML = 'Rare';
    }
    else if(uncommon.includes(input)) {
        document.getElementById('rarity').innerHTML = 'Uncommon';
    }
    else if(common.includes(input)) {
        document.getElementById('rarity').innerHTML = 'Common';
    }
    else{
        document.getElementById('rarity').innerHTML = "Emoji not found"
    }
    function run(d) {
        let LheldRank = 1;
        let MtradedRank = 1;
        for (let [key, value] of Object.entries(d)) {
            if (key == input){
                var t = value.traded;
                var r = value["rolled amount"];
                var di = value["discard amount"];
                var a = value["rough users"].length;
                var users = value["rough users"];
                var l = value["last trade"]
                l = new Date(l * 1000);
                l = l.toLocaleString('en-US', {hour12: false});
                document.getElementById('traded').innerHTML = t
                document.getElementById('rolled').innerHTML = r
                document.getElementById('discard').innerHTML = di
                document.getElementById('held').innerHTML = a
                document.getElementById('last').innerHTML = l
            }
        }
        for (let value of Object.values(d)) {
            if (a > value["rough users"].length) {
                LheldRank += 1;
            }
            else if (a == value["rough users"].length) {
                if (t > value.traded) {
                    LheldRank += 1;
                }
            }
            if (t < value.traded) {
                MtradedRank += 1; 
            }
            else if (t == value.traded) {
                if (a < value["rough users"]) {
                    MtradedRank += 1;
                }
            }
        }
        document.getElementById('LheldRank').innerHTML = "#" + LheldRank;
        document.getElementById('MtradedRank').innerHTML = "#" + MtradedRank;
        const count = {};

        users.forEach(element => {
        count[element] = (count[element] || 0) + 1;
        });
        console.log(count)
        users = JSON.stringify(count);
        users = users.replaceAll("\"", "");
        users = users.replaceAll(":1", "").replaceAll(":2", " (2)").replaceAll(":3", " (3)").replaceAll(":4", " (4)").replaceAll(":5", " (5)").replaceAll(":6", " (6)").replaceAll(":7", " (7)").replaceAll(":8", " (8)").replaceAll(":9", " (9)").replaceAll(":10", " (10)");
        users = users.replaceAll(",", ", ").replaceAll("{", "").replaceAll("}", "").replaceAll("@", "");

        document.getElementById('users').innerHTML = users;
        
        
    }
    loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { run(data)}, function(xhr) { console.error(xhr); });
    
}

function search1() {
    clear();
    input1 = document.getElementById('input1').value.replaceAll(" ", "")
    document.getElementById('input1').value = document.getElementById('input1').value.replaceAll(" ", "")
    grapheme = splitter.splitGraphemes(input1)[splitter.splitGraphemes(input1).length-1]
    emojiLength = grapheme.length
    if (splitter.countGraphemes(input1) < 1) {
        document.getElementById('rarity1').innerHTML = "???"
    }
    else if (splitter.countGraphemes(input1) == 2 && input1.includes("❤️‍🔥")) {
        input1 = document.getElementById('input1').value;
    }
    else {
        document.getElementById('input1').value = document.getElementById('input1').value.substring(input1.length-emojiLength);
        input1 = document.getElementById('input1').value;
    }
    //console.log(input1);
    input1 = input1;
    //RARITY
    document.getElementById('rarity1').innerHTML = "???"
    //console.log(input1.length);
    if (legendary.includes(input1)) {
        if (input1.length > 1)
            document.getElementById('rarity1').innerHTML = 'Legendary';
    }
    else if(epic.includes(input1)) {
        document.getElementById('rarity1').innerHTML = 'Epic';
    }
    else if(rare.includes(input1)) {
        document.getElementById('rarity1').innerHTML = 'Rare';
    }
    else if(uncommon.includes(input1)) {
        document.getElementById('rarity1').innerHTML = 'Uncommon';
    }
    else if(common.includes(input1)) {
        document.getElementById('rarity1').innerHTML = 'Common';
    }
    else{
        document.getElementById('rarity1').innerHTML = "Emoji not found"
    }
    function run(d) {
        let LheldRank = 1;
        let MtradedRank = 1;
        for (let [key, value] of Object.entries(d)) {
            if (key == input1){
                var t = value.traded;
                var r = value["rolled amount"];
                var di = value["discard amount"];
                var a = value["rough users"].length;
                document.getElementById('traded1').innerHTML = t
                document.getElementById('rolled1').innerHTML = r
                document.getElementById('discard1').innerHTML = di
                document.getElementById('held1').innerHTML = a            }
        }
        for (let value of Object.values(d)) {
            if (a > value["rough users"].length) {
                LheldRank += 1;
            }
            else if (a == value["rough users"].length) {
                if (t > value.traded) {
                    LheldRank += 1;
                }
            }
            if (t < value.traded) {
                MtradedRank += 1; 
            }
            else if (t == value.traded) {
                if (a < value["rough users"]) {
                    MtradedRank += 1;
                }
            }
        }
        document.getElementById('LheldRank1').innerHTML = "#" + LheldRank;
        document.getElementById('MtradedRank1').innerHTML = "#" + MtradedRank;
        
        
    }
    loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { run(data)}, function(xhr) { console.error(xhr); });
    
}

function search2() {
    let rarity1 = 5
    let rarity2 = 5
    input2 = document.getElementById('input2').value.replaceAll(" ", "")
    document.getElementById('input2').value = document.getElementById('input2').value.replaceAll(" ", "")
    grapheme = splitter.splitGraphemes(input2)[splitter.splitGraphemes(input2).length-1]
    emojiLength = grapheme.length
    if (splitter.countGraphemes(input2) < 1) {
        document.getElementById('rarity2').innerHTML = "???"
    }
    else if (splitter.countGraphemes(input2) == 2 && input2.includes("❤️‍🔥")) {
        input2 = document.getElementById('input2').value;
    }
    else {
        document.getElementById('input2').value = document.getElementById('input2').value.substring(input2.length-emojiLength);
        input2 = document.getElementById('input2').value;
    }
    //console.log(input2);
    input2 = input2;
    //RARITY
    document.getElementById('rarity2').innerHTML = "???"
    //console.log(input2.length);
    if (legendary.includes(input2)) {
        if (input2.length > 1)
            document.getElementById('rarity2').innerHTML = 'Legendary';
            rarity2 = 1;
    }
    else if(epic.includes(input2)) {
        document.getElementById('rarity2').innerHTML = 'Epic';
        rarity2 = 2;
    }
    else if(rare.includes(input2)) {
        document.getElementById('rarity2').innerHTML = 'Rare';
        rarity2 = 3;
    }
    else if(uncommon.includes(input2)) {
        document.getElementById('rarity2').innerHTML = 'Uncommon';
        rarity2 = 4;
    }
    else if(common.includes(input2)) {
        document.getElementById('rarity2').innerHTML = 'Common';
        rarity2 = 5;
    }
    else{
        document.getElementById('rarity2').innerHTML = "Emoji not found"
    }
    function run(d) {
        let LheldRank = 1;
        let MtradedRank = 1;
        score1 = 0;
        score2 = 0;
        for (let [key, value] of Object.entries(d)) {
            if (key == input2){
                var t = value.traded;
                var r = value["rolled amount"];
                var di = value["discard amount"];
                var a = value["rough users"].length;
                document.getElementById('traded2').innerHTML = t
                document.getElementById('rolled2').innerHTML = r
                document.getElementById('discard2').innerHTML = di
                document.getElementById('held2').innerHTML = a
            }
        }
        for (let value of Object.values(d)) {
            if (a > value["rough users"].length) {
                LheldRank += 1;
            }
            else if (a == value["rough users"].length) {
                if (t > value.traded) {
                    LheldRank += 1;
                }
            }
            if (t < value.traded) {
                MtradedRank += 1; 
            }
            else if (t == value.traded) {
                if (a < value["rough users"]) {
                    MtradedRank += 1;
                }
            }
        }
        document.getElementById('LheldRank2').innerHTML = "#" + LheldRank;
        document.getElementById('MtradedRank2').innerHTML = "#" + MtradedRank;
        
        if (document.getElementById('rarity1').innerHTML == "Common") {
            rarity1 = 5;
        }
        else if (document.getElementById('rarity1').innerHTML == "Uncommon") {
            rarity1 = 4;
        }
        else if (document.getElementById('rarity1').innerHTML == "Rare") {
            rarity1 = 3;
        }
        else if (document.getElementById('rarity1').innerHTML == "Epic") {
            rarity1 = 2;
        }
        else if (document.getElementById('rarity1').innerHTML == "Legendary") {
            rarity1 = 1;
        }

        if(rarity1 < rarity2) {
            document.getElementById('rarity1').classList.add("text-green-500");
            document.getElementById('rarity2').classList.add("text-red-500");
            score1++;
        }
        else if(rarity1 > rarity2) {
            document.getElementById('rarity1').classList.add("text-red-500");
            document.getElementById('rarity2').classList.add("text-green-500");
            score2++;
        }
        else if (rarity1 == rarity2) {
            document.getElementById('rarity1').classList.add("text-black");
            document.getElementById('rarity2').classList.add("text-black");
            score1++;
            score2++;
        }
            

        if (parseInt(document.getElementById('traded1').innerHTML) > parseInt(document.getElementById('traded2').innerHTML)){
            document.getElementById('traded1').classList.add("text-green-500");
            document.getElementById('traded2').classList.add("text-red-500");
            score1++;
        }
        else if (parseInt(document.getElementById('traded1').innerHTML) < parseInt(document.getElementById('traded2').innerHTML)){
            document.getElementById('traded1').classList.add("text-red-500");
            document.getElementById('traded2').classList.add("text-green-500");
            score2++;
        }
        else if (parseInt(document.getElementById('traded1').innerHTML) == parseInt(document.getElementById('traded2').innerHTML)){
            document.getElementById('traded1').classList.add("text-black");
            document.getElementById('traded2').classList.add("text-black");
            score1++;
            score2++;
        }

        if (parseInt(document.getElementById('rolled1').innerHTML) < parseInt(document.getElementById('rolled2').innerHTML)){
            document.getElementById('rolled1').classList.add("text-green-500");
            document.getElementById('rolled2').classList.add("text-red-500");
            score1++;
        }
        else if (parseInt(document.getElementById('rolled1').innerHTML) > parseInt(document.getElementById('rolled2').innerHTML)){
            document.getElementById('rolled1').classList.add("text-red-500");
            document.getElementById('rolled2').classList.add("text-green-500");
            score2++;
        }
        else if (parseInt(document.getElementById('rolled1').innerHTML) == parseInt(document.getElementById('rolled2').innerHTML)){
            document.getElementById('rolled1').classList.add("text-black");
            document.getElementById('rolled2').classList.add("text-black");
            score1++;
            score2++;
        }
        if (parseInt(document.getElementById('discard1').innerHTML) < parseInt(document.getElementById('discard2').innerHTML)){
            document.getElementById('discard1').classList.add("text-green-500");
            document.getElementById('discard2').classList.add("text-red-500");
            score1++;
        }
        else if (parseInt(document.getElementById('discard1').innerHTML) > parseInt(document.getElementById('discard2').innerHTML)){
            document.getElementById('discard1').classList.add("text-red-500");
            document.getElementById('discard2').classList.add("text-green-500");
            score2++;
        }
        else if (parseInt(document.getElementById('discard1').innerHTML) == parseInt(document.getElementById('discard2').innerHTML)){
            document.getElementById('discard1').classList.add("text-black");
            document.getElementById('discard2').classList.add("text-black");
            score1++;
            score2++;
        }

        if (parseInt(document.getElementById('held1').innerHTML) > parseInt(document.getElementById('held2').innerHTML)){
            document.getElementById('held1').classList.add("text-red-500");
            document.getElementById('held2').classList.add("text-green-500");
            score2++;
        }
        else if (parseInt(document.getElementById('held1').innerHTML) < parseInt(document.getElementById('held2').innerHTML)){
            document.getElementById('held1').classList.add("text-green-500");
            document.getElementById('held2').classList.add("text-red-500");
            score1++;
        }
        else if (parseInt(document.getElementById('held1').innerHTML) == parseInt(document.getElementById('held2').innerHTML)){
            document.getElementById('held1').classList.add("text-black");
            document.getElementById('held2').classList.add("text-black");
            score1++;
            score2++;
        }

        if (parseInt(document.getElementById('MtradedRank1').innerHTML.replace('#','')) < parseInt(document.getElementById('MtradedRank2').innerHTML.replace('#',''))){
            document.getElementById('MtradedRank1').classList.add("text-green-500");
            document.getElementById('MtradedRank2').classList.add("text-red-500");
            score1++;
        }
        else if (parseInt(document.getElementById('MtradedRank1').innerHTML.replace('#','')) > parseInt(document.getElementById('MtradedRank2').innerHTML.replace('#',''))){
            document.getElementById('MtradedRank1').classList.add("text-red-500");
            document.getElementById('MtradedRank2').classList.add("text-green-500");
            score2++;
        }
        else if (parseInt(document.getElementById('MtradedRank1').innerHTML.replace('#','')) == parseInt(document.getElementById('MtradedRank2').innerHTML.replace('#',''))){
            document.getElementById('MtradedRank1').classList.add("text-black");
            document.getElementById('MtradedRank2').classList.add("text-black");
            score1++;
            score2++;
        }

        if (parseInt(document.getElementById('LheldRank1').innerHTML.replace('#','')) < parseInt(document.getElementById('LheldRank2').innerHTML.replace('#',''))){
            document.getElementById('LheldRank1').classList.add("text-green-500");
            document.getElementById('LheldRank2').classList.add("text-red-500");
            score1++;
        }
        else if (parseInt(document.getElementById('LheldRank1').innerHTML.replace('#','')) > parseInt(document.getElementById('LheldRank2').innerHTML.replace('#',''))){
            document.getElementById('LheldRank1').classList.add("text-red-500");
            document.getElementById('LheldRank2').classList.add("text-green-500");
            score2++;
        }
        else if (parseInt(document.getElementById('LheldRank1').innerHTML.replace('#','')) == parseInt(document.getElementById('LheldRank2').innerHTML.replace('#',''))){
            document.getElementById('LheldRank1').classList.add("text-black");
            document.getElementById('LheldRank2').classList.add("text-black");
            score1++;
            score2++;
        }
        document.getElementById('score1').innerHTML = score1 + "/7";
        document.getElementById('score2').innerHTML = score2 + "/7";
    }
    loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { run(data)}, function(xhr) { console.error(xhr); });
}

function compare(){
    search1()
    search2()
}

toggle = true;
function findUsers(){
    if (toggle) {
        document.getElementById('users').classList.remove('hidden');
        document.getElementById('usersToggle').value = "Hide Users";
        toggle = false;
    }
    else {
        document.getElementById('users').classList.add('hidden');
        document.getElementById('usersToggle').value = "Show Users";
        toggle = true;
    }
}