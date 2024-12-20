const btnno=document.querySelector('.btn-n');
const btnyes=document.querySelector('.btn-s');
const model=document.querySelector('.model');
const heart=document.querySelector('.heart');
const cry=document.querySelector('.cry');
btnyes.addEventListener('click',openmodel);
btnno.addEventListener('click',change);
var counter=0;

function change()
{ counter=counter+1;
  console.log(counter);
  var i = Math.floor(Math.random()*150)+1;
  var j = Math.floor(Math.random()*150)+1;
    btnno.style.left = i+"px";
    btnno.style.top = j+"px";
    if (counter>=2) {
      cry.style.display="block";
    }
}
function openmodel(){
  model.style.display="block";
  heart.style.display="block";
}
function closemodel(){
  model.style.display="none";
  heart.style.display="none";
  cry.style.display="none";
}
window.addEventListener('click',outsideClick);
function outsideClick(e){
  if(e.target == model){
    closemodel();
  }
}
