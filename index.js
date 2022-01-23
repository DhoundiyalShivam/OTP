let inputArr = Array.from(document.querySelectorAll('.code'))
inputArr[0].focus()
inputArr.forEach((data,idx)=>{
 data.addEventListener('keydown',(e)=>{
     inputArr[idx].value=''
     const keyPressed = e.key
   if(idx<inputArr.length-1){
    if(keyPressed>=0 && keyPressed<=9){
        setTimeout(()=>inputArr[idx+1].focus(),10)
    }
   }
   if(idx>0){
    if(keyPressed === "Backspace"){
        setTimeout(()=>inputArr[idx-1].focus(),10)
    }
   }
 })
})