const tuan=document.getElementById('tuan')
const tuan1=document.getElementById('tuan1')
const day=document.getElementById('day')
const gio=document.getElementById('gio')
const phut=document.getElementById('phut')
const giay=document.getElementById('giay')
const span=document.getElementById('span')
function countdown(){
var timeyear = new Date("2022-2-1");
var currentTime0=new Date();
var diff=timeyear-currentTime0
var w=Math.floor(diff/24/3600/1000/7)
var d=Math.floor(diff/24/3600/1000)
var h=Math.floor(diff/3600000)%24
var p=Math.floor(diff/60000)%60
var s=Math.floor(diff/1000)%60
if(d-w*7==0){
   day.innerHTML=d;
   tuan.style.display='none'
   tuan1.style.display='none'
}
if(d-w*7!=0){
   day.innerHTML=d-w*7;
   tuan.innerHTML=w
}
gio.innerHTML=h<10?'0'+h:h
phut.innerHTML=p<10?'0'+p:p
giay.innerHTML=s<10?'0'+s:s
span.innerHTML=d
}
setInterval(function(){
   countdown();
},1000)


const a=document.getElementById('link') 
const audi=document.getElementById('audi')
const btn=document.getElementById('button')
const div=document.getElementById('div')
btn.onclick=function(){
   btn.style.display='none'
   div.style.display='block'
    audi.play();
}
audi.onended=function(){
   audi.play();
}