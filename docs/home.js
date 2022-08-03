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

loadJSON('https://emojimarket.s3.us-west-2.amazonaws.com/emoji_database.json', function(data) { run(data)}, function(xhr) { console.error(xhr); });

function run(d) {
    console.log(d)

    let min = 99999
    let minKey;
    let minTraded;
    for (let [key, value] of Object.entries(d)) {
        if(value['rough users'].length < min) {
            min = value['rough users'].length
            minKey = key
            minTraded = value.traded
        }
        else if (value['rough users'].length == min) {
            if(value.traded < minTraded) {
                min = value['rough users'].length
                minKey = key
                minTraded = value.traded
            }
        }
    }
    document.getElementById("rarest").innerHTML = minKey + "<br>" + (min) + " held"

    let max = 0
    let maxKey;
    let maxHeld;
    for (let [key, value] of Object.entries(d)) {
        if(value.traded > max) {
            max = value.traded
            maxKey = key
            maxHeld = value['rough users'].length
        }
        else if (value.traded == max) {
            if(value['rough users'].length > maxHeld) {
                max = value.traded
                maxKey = key
                maxHeld = value['rough users'].length
            }
        }
    }
    document.getElementById("popular").innerHTML = maxKey + "<br>" + max + " trades"

    let min1 = 99999
    let minKey1;
    let minHeld;
    for (let [key, value] of Object.entries(d)) {
        if(value.traded < min1) {
            min1 = value.traded
            minKey1 = key
            minHeld = value['rough users'].length
        }
        else if (value.traded == min1) {
            if(value['rough users'].length < minHeld) {
                min1 = value.traded
                minKey1 = key
                minHeld = value['rough users'].length
            }
        }
    }
    document.getElementById("unpop").innerHTML = minKey1 + "<br>" + min1 + " trades"
    

    let max1 = 0
    let maxKey1;
    let maxTraded;
    for (let [key, value] of Object.entries(d)) {
        if(value['rough users'].length > max1) {
            max1 = value['rough users'].length
            maxKey1 = key
            maxTraded = value.traded
        }
        else if (value['rough users'].length == max1) {
            if (value.traded > maxTraded) {
                max1 = value['rough users'].length
                maxKey1 = key
                maxTraded = value.traded
            }
        }
    }
    document.getElementById("common").innerHTML = maxKey1 + "<br>" + max1 + " held"
}