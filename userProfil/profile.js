var currentUser=JSON.parse(localStorage.getItem("CurrentUser"))

function showProfile(currentUser){
    console.log("here")
      user = currentUser[0]
     var element = `<div class="user">
     <i class="fa-solid fa-user"></i>
     <h1>Your id : <span id="id">${user.id}</span></h1>
     <h1>Name : <span id="id">${user.name}</span></h1>
     <h1>Email : <span id="id">${user.email}</span></h1>
     <h1>Role : <span id="id">${user.status}</span></h1>
   </div>`



<div class="card">
  <img src="img.jpg" alt="John" style="width:100%">
  <h1>${user.name}</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
</div>










   $(".container").append(element)
}
showProfile(currentUser)