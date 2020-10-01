btnAdd.onclick=function(){
  let addFirstNum = Number(inptFNum.value)
  let addSecNum = Number(inptSNum.value)
  
  function addNumbers (num1, num2) {
    return (num1 + num2)
  }
    
  let addResult = addNumbers(addFirstNum, addSecNum)
  
  lblAnswer.value = `${addFirstNum} + ${addSecNum} = ${addResult}.`
}


btnMult.onclick=function(){
  let multFirstNum = Number(inptFNum.value)
  let multSecNum = Number(inptSNum.value)
  
  function multNumbers (numm1, numm2) {
    return (numm1 * numm2)
  }
    
  let multResult = multNumbers(multFirstNum, multSecNum)
  
  lblAnswer.value = `${multFirstNum} x ${multSecNum} = ${multResult}.`
}


btnClear.onclick=function(){
  inptFNum.value = ""
  inptSNum.value = ""
  lblAnswer.value = ""
}