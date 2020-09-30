
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnMemEnt.onclick=function(){
  let inptName = inptFirstName.value
  
  if (members.includes(inptName)) {
    lblMemMsg.value = inptName + " is a member!"
  } else {
    members.push(inptName);
    lblMemMsg.value = inptName + " was not a member, but they are now!"
    console.log(members)
}
}