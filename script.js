const header = document.querySelector("#header");
const container = document.querySelector("#container");

function column() {
    for (let x = 0; x < 272; x++){
         let box = document.createElement("div");
         box.classList.add("box");
         container.appendChild(box); 
    }
}
    column() 

const title = document.createElement("h1");
      title.textContent="Etch A Sketch";
      header.appendChild(title); 
const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Create a Number of Grid";
button.addEventListener('click', promptFN);
function promptFN(e){
    numBer = prompt("numbers"); 
    console.log(numBer);
    if (numBer > ''){
        document.body.removeChild(container);
    }
}
header.appendChild(button);



    

