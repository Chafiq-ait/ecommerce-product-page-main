const menuBtn=document.querySelector(".navbar .leftSide .menuBtn")
const menu=document.querySelector(".navbar .leftSide .menu")
const Exit=document.querySelector(".navbar .leftSide .menu .Exit")
const cart=document.querySelector(".navbar .rightSide .cart")
const notification=document.querySelector(".navbar .rightSide .cart .notification")
const basket=document.querySelector(".basket")
const emptyBasket=document.querySelector(".basket .empty")
const basketImg=document.querySelector(".basket .subContainer .img")
const basketDelete=document.querySelector(".basket .subContainer .delete")
const basketResult=document.querySelector(".basket .subContainer .HC .calculation")
const basketTotal=document.querySelector(".basket .subContainer .HC  .total")
const bigImg=document.querySelector(".main .leftSide .selectedPicture img")
const firstPre=document.querySelector(".main .leftSide .selectedPicture .firstPre")
const firstNxt=document.querySelector(".main .leftSide .selectedPicture .firstNxt")
const smallImgs=document.querySelectorAll(".main .leftSide .select .small img")
const smallImgsDiv=document.querySelectorAll(".main .leftSide .select .small")
const actualPrice=document.querySelector(".main .rightSide .price")
const minus=document.querySelector(".main .rightSide .bottom .theNumber .minus")
const plus=document.querySelector(".main .rightSide .bottom .theNumber .plus")
const num=document.querySelector(".main .rightSide .bottom .theNumber .num")
const btn1=document.querySelector(".main .rightSide .bottom .btn button")
const lightBox=document.querySelector(".lightBox")
const lightBoxBImg=document.querySelector(".lightBox .bigOne .imgBig")
const preBtn=document.querySelector(".lightBox .bigOne .NP .previous")
const nxtBtn=document.querySelector(".lightBox .bigOne .NP .next")
const close=document.querySelector(".lightBox .bigOne .close")
const lightBoxSImg=document.querySelectorAll(".lightBox .smallOne img")

const lightBoxSImgChosen=document.querySelectorAll(".lightBox .smallOne .small")

let bigIMGES=[
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
   ]
   let order=0
   let index=0
console.log(smallImgs)

menuBtn.addEventListener("click",()=>{
menu.style.left="0"
menu.style.width="100%"
})

Exit.addEventListener("click",()=>{
    menu.style.width="0"
 menu.style.left="-200px"

})

firstNxt.addEventListener("click",()=>{
    index+1>bigIMGES.length-1?index=0:index++
        bigImg.setAttribute("src", bigIMGES[index])
        
 
})

firstPre.addEventListener("click",()=>{
    index<=0?index=3:index--
        bigImg.setAttribute("src", bigIMGES[index])
    
 
})
//Changing image
smallImgs.forEach(img=>img.addEventListener("click",(e)=>{
   smallImgs.forEach(imgs=>imgs.classList.remove("chosenImg"))
   smallImgsDiv.forEach(div=>div.classList.remove("chosen"))
   e.target.parentElement.classList.add("chosen")
   e.target.classList.add("chosenImg")
bigImg.setAttribute("src",bigIMGES[e.target.dataset.num])
basketImg.setAttribute("src",e.target.getAttribute("src"))//The selected img in the basket
//connecting the selected img with the one the lightBox
lightBoxSImg.forEach(imgs=>imgs.classList.remove("chosenImg"))
lightBoxSImgChosen.forEach(div=>div.classList.remove("chosen"))
lightBoxSImgChosen[e.target.dataset.num].classList.add("chosen")
lightBoxSImg[e.target.dataset.num].classList.add("chosenImg")
//switching img and lightBox
const lightBoxSImgNum=document.querySelector(".main .leftSide .select .small img.chosenImg")
let index=lightBoxSImgNum.dataset.num;

nxtBtn.addEventListener("click",()=>{    
    index<bigIMGES.length-1?index++:index=0
   lightBoxBImg.setAttribute("src",bigIMGES[index])
   lightBoxSImg.forEach(img=>img.classList.remove("chosenImg"))
lightBoxSImg[index].classList.add("chosenImg")
lightBoxSImgChosen.forEach(chosen=>chosen.classList.remove("chosen"))
lightBoxSImgChosen[index].classList.add("chosen") 


smallImgs.forEach(imgs=>imgs.classList.remove("chosenImg"))
smallImgsDiv.forEach(div=>div.classList.remove("chosen"))
smallImgsDiv[index].classList.add("chosen")
smallImgs[index].classList.add("chosenImg")
bigImg.setAttribute("src",bigIMGES[index])

   })
preBtn.addEventListener("click",()=>{ 
 index<=0?index=3:index--
lightBoxBImg.setAttribute("src",bigIMGES[index])
lightBoxSImg.forEach(img=>img.classList.remove("chosenImg"))
lightBoxSImg[index].classList.add("chosenImg")
lightBoxSImgChosen.forEach(chosen=>chosen.classList.remove("chosen"))
lightBoxSImgChosen[index].classList.add("chosen")


smallImgs.forEach(imgs=>imgs.classList.remove("chosenImg"))
smallImgsDiv.forEach(div=>div.classList.remove("chosen"))
smallImgsDiv[index].classList.add("chosen")
smallImgs[index].classList.add("chosenImg")
bigImg.setAttribute("src",bigIMGES[index])
})



}))

//plus and minus and number function
plus.addEventListener("click",()=>{
    order++;
    num.innerHTML=order
})
minus.addEventListener("click",()=>{
    if(order>0){
        order--;
        num.innerHTML=order
    }else{
        order=0
        num.innerHTML=order
    }
  
})

//setting notification
function notificationNum(){
    notification.innerHTML=num.innerHTML
}
btn1.addEventListener("click",()=>{
    notification.style.display="block"
    notificationNum()
    total()
    emptyBasket.style.display="none"
})

//The basket 
function total(){
    let price=125;
    let quantity=num.innerHTML;
    let totalPrice=price*quantity
    console.log(price)
    basketResult.innerHTML=`$125.00 *${num.innerHTML}`
    basketTotal.innerHTML=`$${totalPrice}.00`;
    
}
basketDelete.addEventListener("click",()=>{
    emptyBasket.style.display="flex"
    setTimeout(()=>{
        basket.style.display="none";
        notification.innerHTML=0
        notification.style.display="none";
    },1000)
})
cart.addEventListener("click",()=>{
    basket.style.display="block"
    setTimeout(()=>{
        
        basket.style.display="none" 
     },4000)
    
        
    }
)
// lightBox
bigImg.addEventListener("click",()=>{
    lightBox.style.display="flex"
    lightBoxBImg.setAttribute("src",bigImg.getAttribute("src"))
   
})


close.addEventListener("click",()=>{
    lightBox.style.display="none"
});

   


const forWard=()=>nxtBtn.addEventListener("click",()=>{    

    
    index<bigIMGES.length-1?index++:index=0
   lightBoxBImg.setAttribute("src",bigIMGES[index])
   lightBoxSImg.forEach(img=>img.classList.remove("chosenImg"))
lightBoxSImg[index].classList.add("chosenImg")
lightBoxSImgChosen.forEach(chosen=>chosen.classList.remove("chosen"))
lightBoxSImgChosen[index].classList.add("chosen") 

smallImgs.forEach(imgs=>imgs.classList.remove("chosenImg"))
smallImgsDiv.forEach(div=>div.classList.remove("chosen"))
smallImgsDiv[index].classList.add("chosen")
smallImgs[index].classList.add("chosenImg")
bigImg.setAttribute("src",bigIMGES[index])


   })
forWard()
   const backWard=()=>preBtn.addEventListener("click",()=>{ 
 index<=0?index=3:index--
lightBoxBImg.setAttribute("src",bigIMGES[index])
lightBoxSImg.forEach(img=>img.classList.remove("chosenImg"))
lightBoxSImg[index].classList.add("chosenImg")
lightBoxSImgChosen.forEach(chosen=>chosen.classList.remove("chosen"))
lightBoxSImgChosen[index].classList.add("chosen")

smallImgs.forEach(imgs=>imgs.classList.remove("chosenImg"))
smallImgsDiv.forEach(div=>div.classList.remove("chosen"))
smallImgsDiv[index].classList.add("chosen")
smallImgs[index].classList.add("chosenImg")
bigImg.setAttribute("src",bigIMGES[index])

})
backWard()


lightBoxSImg.forEach(img=>img.addEventListener("click",(e)=>{
        lightBoxSImg.forEach(imgs=>imgs.classList.remove("chosenImg"))
        lightBoxSImgChosen.forEach(div=>div.classList.remove("chosen"))
        e.target.parentElement.classList.add("chosen")
        e.target.classList.add("chosenImg")
        lightBoxBImg.setAttribute("src",bigIMGES[e.target.dataset.num])

        smallImgs.forEach(imgs=>imgs.classList.remove("chosenImg"))
        smallImgsDiv.forEach(div=>div.classList.remove("chosen"))
        smallImgsDiv[e.target.dataset.num].classList.add("chosen")
smallImgs[e.target.dataset.num].classList.add("chosenImg")
bigImg.setAttribute("src",bigIMGES[e.target.dataset.num])
     }))








