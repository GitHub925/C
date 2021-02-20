var canvas=document.getElementById("boogle5");
var booglectx5 = canvas.getContext("2d");
var rwidth1=150;
var rheight1=100;
var rx1 =0;
var ry1 = 0;
var won
var ry2 = 125;
var keypressed
var rx2 = 0;
var carpic1 = "car1.png";
var carpic2 = "car2.png";
var backpic = "background.jpg";
function additems(){
    backpicTag = new Image();
    backpicTag.onload = uploadbackpic;
    backpicTag.src = backpic;
    carpic1Tag = new Image();
    carpic1Tag.onload = uploadcar1;
    carpic1Tag.src = carpic1;
    carpic2Tag = new Image();
    carpic2Tag.onload = uploadcar2;
    carpic2Tag.src = carpic2;
}

function uploadbackpic(){
    booglectx5.drawImage(backpicTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    booglectx5.drawImage(carpic1Tag, rx1, ry1, rwidth1, rheight1);
}
function uploadcar2(){
    booglectx5.drawImage(carpic2Tag, rx2, ry2, rwidth1, rheight1);
}
window.addEventListener("keydown", my_key_down);
function my_key_down(e){
keypressed = e.keyCode;
console.log(keypressed)
if(keypressed == "38"){
    car1up();
    console.log("Car 1 up");
}
else if(keypressed == "40"){
    car1down();
    console.log("Car 1 down");
}
else if(keypressed == "39"){
    car1right();
    console.log("Car 1 right");
}
else if(keypressed == "37"){
    car1left();
    console.log("Car 1 left");
}
else if(keypressed == "65"){
    car2left();
    console.log("Car 2 left");
}
else if(keypressed == "68"){
    car2right();
    console.log("Car 2 left")
}
else if(keypressed == "87"){
    car2up();
    console.log("Car 2 up")
}
else if(keypressed == "83"){
    car2down();
    console.log("Car 2 down")
}
if(rx2 >= 700 && won !=  1){
    won=2
    document.getElementById("gamestatus").innerHTML = "Car 2 has Won!!!!"
}
if(rx1 >= 700 && won != 2){
    won =1
    document.getElementById("gamestatus").innerHTML = "Car 1 has Won!!!!"
}
}
function car1up(){
    if(ry1 > 0){
        ry1 = ry1-10;
        console.log("Y: " +ry1)
        uploadbackpic();
        uploadcar1();
        uploadcar2()
    }
}
    function car1down(){
        if(ry1 < 500){
            ry1 = ry1+10;
            console.log("Y: "+ ry1)
            uploadbackpic();
            uploadcar1();
            uploadcar2()
        }
    }

    function car1left(){
        if(rx1 > 0){
            rx1 = rx1-10;
            console.log("X: " +rx1)
            uploadbackpic();
            uploadcar1();
        }
    }

    function car1right(){
        if(rx1 < 800){
            rx1 = rx1+10;
            console.log("X: "+ rx1)
            uploadbackpic();
            uploadcar1();
            uploadcar2()
        }
    }
    function car2down(){
        if(ry2 < 500){
            ry2 = ry2+10;
            console.log("Y: "+ ry2)
            uploadbackpic();
            uploadcar1();
            uploadcar2();
        }
    }

    function car2left(){
        if(rx2 > 0){
            rx2 = rx2-10;
            console.log("X: " +rx2)
            uploadbackpic();
            uploadcar1();
            uploadcar2()
        }
    }

    function car2right(){
        if(rx2 < 800){
            rx2 = rx2+10;
            console.log("X: "+ rx2)
            uploadbackpic();
            uploadcar1();
            uploadcar2()
        }
    }
    function car2up(){
        if(ry2 > 0){
            ry2 = ry2-10;
            console.log("Y: " +ry2)
            uploadbackpic();
            uploadcar1();
            uploadcar2()
        }
    }