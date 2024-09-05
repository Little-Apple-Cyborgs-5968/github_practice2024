
// team 1
var section = document.getElementById('team1');
function button1_clicked() {
    document.getElementById('button1').textContent = 'boo';
    document.getElementById('button1').style.width = '500px';
    document.getElementById('button1').style.height = '500px';
    document.getElementById('button1').style.fontSize = '200px'
    document.getElementById('button1').style.backgroundImage = 'url("DustBaby.jpg")';
    document.getElementById('button1').style.backgroundSize = '500px 500px';
    document.getElementById('button1').style.color = 'white';
    section.style.backgroundColor = 'pink';
}
document.getElementById('button1').addEventListener('click', button1_clicked);
function changeSectionColor() {
    section.style.backgroundColor = 'lightblue';
}

changeSectionColor();




// team 2
function button2_clicked() {
    //Good job clickn yo
    document.getElementById("button2").style.background='#ffa500';
    button2.textContent = "lesgooo bobby's boppn branch is winnen dis ting";
    button2.style.width = '2000px'; // setting the width to 200px
    button2.style.height = '2000px'; // setting the height to 200px
    button2.style.fontSize = '200px'; // setting the font size to 20px
    button2.style.color = '#ff007f'; // setting the color to white
    var img = document.createElement("img");
    img.src = "/Users/nutsa/Documents/orang.webp";
    var src = document.getElementById("header");
    src.appendChild(img);

}
document.getElementById('button2').addEventListener('click', button2_clicked);




// team 1
function button3_clicked() {
    document.getElementById('button1').innerText = 'robors';
}
document.getElementById('button1').addEventListener('click', button3_clicked);
