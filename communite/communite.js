var currentUser=JSON.parse(localStorage.getItem("CurrentUser"))
var workers=JSON.parse(localStorage.getItem("worker"))
var employment=JSON.parse(localStorage.getItem("recruiter"))
var both=workers.concat(employment)


function showMembers(){
  for(i=0;i<both.length;i++){
    console.log(both[i])
    element =  `<div class="member">
    <div class="photo">
       <i class="fa-regular fa-user"></i>
    </div>
    <h2>${both[i].status}</h2>
    <div id="email"><h3></h3>${both[i].email}</div>`
    $(".container").append(element)
  }
}

showMembers()