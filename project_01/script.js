  var istatus =document.querySelector("h5")
  var addFriend = document.querySelector("#add")

  var removeFreind = document.querySelector("#remove")

  addFriend.addEventListener("click",function(){
    istatus.innerHTML = "Freinds"
    istatus.style.color="green"
  })
  removeFreind.addEventListener("click",function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color= "red"
  })
  