
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
    //write what u want to happen when the button is clicked
}
document.getElementById('button2').addEventListener('click', button2_clicked);




// team 1
function button3_clicked() {
    //write what u want to happen when the button is clicked
}
document.getElementById('button1').addEventListener('click', button3_clicked);