//Write your code here
function createDiv(width, height, text) {
    let container=document.querySelector("#container");
    let div=document.createElement("div");
    // div.style.width = width + 'px';
    // div.style.height = height + 'px';
    //  ###### or ######
    div.setAttribute("style",`height:${height}px ;width:${width}px`)
    div.innerText = text;
    container.appendChild(div)
        
    }
    createDiv(200,200,'hello this is the new div');
    
    // Do not change this code
    Window.createDiv = createDiv;

