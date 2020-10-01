swLight.onchange=function(){
  let switchBtn = swLight.value;
  
  if (switchBtn == true) {
    lblLight.value = "The light is on."
    lblLight.style.backgroundColor = "#fce303"
  } else {
    lblLight.value = "The light is off."
    lblLight.style.backgroundColor = "#000000"
  }
}

Button1.onclick=function(){
  let prgAmount = Number(sldBar.getValue())
  prgBar.value = prgAmount
}
