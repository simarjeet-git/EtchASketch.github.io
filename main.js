 
 var a;
 
 
function getnumber(){ 
    a = prompt('please put nmber of boxes you want ..put inbetween 250 to 260')
}
getnumber()
const containertarget = document.querySelector('#container');


 for(i=0;i<= a;i++){
    let boxes = document.createElement('div');
    boxes.id = 'item'
    containertarget.appendChild(boxes)

 }


  
 const colorchange = document.querySelectorAll('#item');
 colorchange.forEach(colorchange => {
     colorchange.addEventListener('mouseover', () => {
         colorchange.style.backgroundColor = 'yellow';
     });
 });
   
 