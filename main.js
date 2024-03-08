 

let  boxcreate = [];
 
 
let numbervalue =  document.getElementById('nsubmit').addEventListener('click',nv)
 

function nv(){
    let boxnumber =  document.getElementById('boxnumber').value
 
    /*let gamecontainer = document.getElementById('gamecontainer')
    gamecontainer.style.width =(parseInt("40px".replace(/px/,""))*boxnumber)+"px";
    gamecontainer.style.height = (parseInt("40px".replace(/px/,""))*boxnumber)+"px";*/
    for(let i = 0; i<=boxnumber; i++){
   let  boxdiv =  document.createElement("div")
    boxdiv.id = "item";
   gamecontainer.appendChild(boxdiv)
    boxcreate.push(boxdiv)
    }
 
}
 
let colorchoose = document.getElementById("colorselect").addEventListener('click',()=>{
    let getcolor = document.getElementById('Color').value
     
     boxcreate.forEach(boxcreate=>{
        boxcreate.addEventListener('mouseover',()=>{
            boxcreate.style.backgroundColor = `${getcolor}`;
        })
     })
})
  
let randomcolor = document.getElementById('rcolor').addEventListener('click',()=>{
 
        let colors = '0123456789ABCDEF';
        let  color = '#';
        for (let i = 0; i < 6; i++) {
          color += colors[Math.floor(Math.random() * 16)];
           
        }
         
         
        boxcreate.forEach(boxcreate=>{
            boxcreate.addEventListener('mouseover',()=>{
                boxcreate.style.backgroundColor = `${color}`;
            })
        })
    });
    let gamerestart =  document.getElementById("reset") 
    gamerestart.addEventListener('click',()=>{
        location.reload()
    })
    
       
