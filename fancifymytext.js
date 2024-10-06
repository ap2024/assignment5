function Big(){
    alert("Hello, world!");
    document.getElementById("tex").style.fontSize = "24px";
}

function fancy(){
    alert("Bold");
    document.getElementById("tex").style.fontWeight = "bold";
    document.getElementById("tex").style.font;
    document.getElementById("tex").style.color = "blue";
    document.getElementById("tex").style.textDecoration = "underline";
}

function boring(){
    document.getElementById("tex").style.fontWeight = "lighter";
    document.getElementById("tex").style.color = "black";
    document.getElementById("tex").style.textDecoration = "none";
}

function cow(){
    let t = document.getElementById("tex").value;
    var parts = t.split(".");
    let q =parts.join("Moo");
    let y = q.toUpperCase();

    document.getElementById("tex").value = y;


}