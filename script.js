const header = document.querySelector("#header");
const container = document.querySelector("#container");
//Title
const title = document.createElement("h1");
      title.textContent="Etch A Sketch";
      header.appendChild(title); 
//Create Grid button
const button = document.createElement("button");
      button.classList.add("button");
      button.textContent = "Change Grid";
      header.appendChild(button);
//Clear button
const buttonClear = document.createElement("button");
      buttonClear.classList.add("buttonClear");
      buttonClear.textContent = "Clear";
      header.appendChild(buttonClear);

    for (let x = 0; x < 256; x++){
        createBox();
    }

    function createBox(){
        let init = 17;
        let sizer = 100;
        let box = document.createElement("div");
        let flexBasis = sizer / init;
        box.classList.add("box");
        container.appendChild(box); 
        box.style.flexBasis = `${flexBasis}% `;        
        box.addEventListener('mouseover', function(){
        box.style.backgroundColor = 'black';});
        buttonClear.addEventListener('click',function(){
        box.style.backgroundColor = 'white';});
    }

    button.addEventListener('click', function(){
      let newSize = prompt("");
      newSize = parseInt(newSize);
      if (newSize === null || newSize === ''){
            return;
      }
      if (isNaN(newSize) || newSize<1 || newSize > 100){
            alert("We can only put numbers from 1 to 100");
            return;
      }
       else {container.innerHTML = '';}
       if(container.innerHTML === ''){
            for (let x = 0; x < newSize * newSize ; x++){
                  let size = newSize +1;
                  let initial = 100;
                  let box = document.createElement("div");
                  let boxSize = initial/size;
                  box.classList.add("box");
                  box.style.flexBasis = `${boxSize}%`;
                  container.appendChild(box);         
                  box.addEventListener('mouseover', function(){
                  box.style.backgroundColor = 'black';});
                  buttonClear.addEventListener('click',function(){
                  box.style.backgroundColor = 'white';});
    }
              }
       })