const header = document.querySelector("#header");
const container = document.querySelector("#container");
const title = document.createElement("h1");
      title.textContent="Etch A Sketch";
      header.appendChild(title); 
const button = document.createElement("button");
      button.classList.add("button");
      button.textContent = "Create a Number of Grid";
      header.appendChild(button);

const buttonClear = document.createElement("button");
      buttonClear.classList.add("buttonClear");
      buttonClear.textContent = "Clear";
      header.appendChild(buttonClear);
      
       
    for (let x = 0; x < 272; x++){
        createBox();
    }

    function createBox(){
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);         
        box.addEventListener('mouseover', function(){
        box.style.backgroundColor = 'black';});
        buttonClear.addEventListener('click',function(){
        box.style.backgroundColor = 'white';});
    }