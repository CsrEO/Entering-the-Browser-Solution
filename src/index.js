const myBox = document.getElementById("my-box");

let myColor = myBox.style.backgroundColor;

function changeColor(){

    if(myColor == "red"){
        myColor = "blue";
    } else if (myColor =="blue"){
        myColor ="black";
    } else if (myColor =="black"){
        myColor = "green";
    } else if (myColor == "green"){
        myColor = "purple";
    } else if (myColor =="purple"){
        myColor = "pink";
    } else if (myColor == "pink"){
        myColor = "yellow";
    } else {
        myColor = "red";
    }

myBox.style.backgroundColor = myColor
}



  
  let width = 50;
  let height = 50;

function resize() {

     width = width + 10;
     height = height + 10;


myBox.style.width = width
myBox.style.height = height

}





function onClick(){
    changeColor();
    resize();
}

myBox.addEventListener("click", onClick);


