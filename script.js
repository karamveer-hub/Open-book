var pageNo;
// if(pageNo.value)
$('body').css("background-color","black")
if(pageNo==1){
   $('[pageNo=1]').show()
   $('[pageNo=2]').hide()
   $('[pageNo=3]').hide()
   $('[pageNo=4]').hide()
}
$("[pageNo=1]").click(function(){
  console.log(this);
  
})
document.getElementsByTagName('div[page')


var swapPageLeft=document.querySelector('.inner-box')
var swapPageRight=document.querySelector('.inner-box2')
var div=document.querySelector('.button-div')
swapPageLeft.addEventListener('click',function(){
   div.style.zIndex=-1;
   div.style.marginLeft="0px"
   div.style.transform="rotateY(-180deg)";
   div.style.transition="1s";
   console.log(div.style.zIndex);

   console.log('innerbox')
})
swapPageRight.addEventListener('click',function(){
   div.style.zIndex=+1;
   div.style.marginLeft="390px";
   div.style.transform="rotateY(0deg)";
   div.style.transition="1s";
   console.log(div.style.zIndex);

   console.log('innerbox2')

})
var swapPageLeft2=document.querySelector('.inner-box3')
var swapPageRight2=document.querySelector('.inner-box4')
var div2=document.querySelector('.button-div2')
swapPageLeft2.addEventListener('click',function(){
   div2.style.zIndex=+1;
   div2.style.margin="0"
   div2.style.transform= "rotateY(-180deg)";
   div2.style.transition="1s";
   console.log(div2.style.zIndex);
   console.log('innerbox3')

})
swapPageRight2.addEventListener('click',function(){
   div2.style.zIndex=-1;
   div2.style.marginLeft="390px"
   div2.style.transform="rotateY(0deg) ";
   div2.style.transition="1s";
   console.log(div2.style.zIndex);
   console.log('innerbox4')
})
var swapPageLeft3=document.querySelector('.inner-box5')
var swapPageRight3=document.querySelector('.inner-box6')
var div3=document.querySelector('.button-div3')
swapPageLeft3.addEventListener('click',function(){
   div3.style.margin="0"
   div3.style.transform="rotateY(-180deg)"
   div3.style.transition="1s"
   div3.style.zIndex=+2;
   console.log(div3.style.zIndex);
   console.log('innerbox5')

})
swapPageRight3.addEventListener('click',function(){
   div3.style.marginLeft="390px"
   div3.style.transform="rotateY(0deg)"
   div3.style.transition="1s"
   div3.style.zIndex=-2;
   console.log(div3.style.zIndex);
   console.log('innerbox6')
})