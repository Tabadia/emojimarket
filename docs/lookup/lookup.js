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

function load(d){
    document.getElementById("current").innerHTML = "";
    document.getElementById("collection").innerHTML = "";
    document.getElementById('error').innerHTML = "";
    userFound = true
    var count = 0
    input = "@thalen"
    document.getElementById("user").innerHTML = input;
    function run(d){
        document.getElementById("current").innerHTML = "";
        document.getElementById("collection").innerHTML = "";
        for (let [key, value] of Object.entries(d)) {
            if(value['rough users'].includes(input) && count < 5){
                document.getElementById("current").innerHTML += key;
                count++;
                console.log(count)
            }
            if(value['associated users'].includes(input)){
                document.getElementById("collection").innerHTML += key;
            }
        }
        if(document.getElementById("current").innerHTML.length == 0){
            document.getElementById('error').innerHTML = "User not found";
            userFound = false
        }
        if (userFound){
            if(count > 5 || count < 5) {
                input = input.replaceAll("@", "");
                document.getElementById('error').innerHTML = "Doesn't look right? Go to #botcommands in the discord and type !lookup " + input;
            }
            
        }
        
    }
    loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { run(data)}, function(xhr) { console.error(xhr); });
}

loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { load(data)}, function(xhr) { console.error(xhr); });


function search() {
    document.getElementById("current").innerHTML = "";
    document.getElementById("collection").innerHTML = "";
    document.getElementById('error').innerHTML = "";
    userFound = true
    var count = 0
    let input = document.getElementById("input").value;
    input = input.replaceAll("@", "");
    input = input.toLowerCase();
    input = "@" + input;
    document.getElementById("user").innerHTML = input;

    function run(d){
        document.getElementById("current").innerHTML = "";
        document.getElementById("collection").innerHTML = "";
        for (let [key, value] of Object.entries(d)) {
            if(value['rough users'].includes(input)){
                if (count < 5){
                    document.getElementById("current").innerHTML += key;
                    count++;
                    console.log(count)
                }
                else {
                    count++;
                }
            }
            if(value['associated users'].includes(input)){
                document.getElementById("collection").innerHTML += key;
            }
        }
        if(document.getElementById("current").innerHTML.length == 0){
            document.getElementById('error').innerHTML = "User not found";
            userFound = false
        }
        if (userFound){
            if(count > 5 || count < 5) {
                input = input.replaceAll("@", "");
                document.getElementById('error').innerHTML = "Doesn't look right? Go to #botcommands in the discord and type !lookup " + input;
            }
            
        }
        
    }
    loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { run(data)}, function(xhr) { console.error(xhr); });

}