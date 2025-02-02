// onclick

let img = document.quwerySelect('img');
console.log(img);

img.onclick = function() {
    img.src = './img/img2.png'
}

// onmouseover
img.onmouseover = () => {
    img.src = './img/img3,jpg'
}
// onmouseout
img.onmouseout = () =>{ 
    img.src = './img/imp1.png'
}
const muCustomEvent = () =>{
    alert("Estoy imprimiendo mi evento customizado")
}

const myOnFocus = (obj) => {
    obj.style.background = 'blue';
}

const myOnBlur = (obj) => {
    obj.style.background = 'orange';
}
// document.addEventListener('click, myCustomEvent') {
//     Object.style.background = 'blue';

const createButtons = (number, color) => {
    for(let i = 0; i < number; i++)
        const div = document.createElement('div');
    div.style.backgroundColor = color;
    div.style.height = "30px";
    div.style.width = "30px";
    div.style.margin = "3px";
    div.style.cssFloat = "left";
    div.style.cursor = "pointer";
    div.draggable = "true";
     alert('"you clicked on a box #" +${i +1}')

}

 
// onblur  
// onfocus
// onchange
// onkeydown
// onkeyup
// onload