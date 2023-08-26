  

//whene we click on recruiter skills will be show
$('#recruiter').on("click",function(){
    $("#forceo").css("display","block")
    $("#forworker").css("display","none")
    $("#lvl").css("display","none")
})

//whene we click on recruiter skills will be show
$('#worker').on("click",function(){
    $("#forworker").css("display","block")
    $("#lvl").css("display","block")
    $("#forceo").css("display","none")
})

var i=0
 function idGenerateur(){
    return ++i
 }
//data //
function candidate(name,password,email,level,skills){
    return {
   id:idGenerateur(),
   name:name,
   password:password,
   email:email,
   level:level,
   skills:skills,
   status :"worker"
    } 
}

function recruiter(name,societe,email,password){
    return {
    id:idGenerateur(),
    name:name,
    societe:societe,
    password:password,
    email:email,
    status:"recruiter"
    }
}



function Users(){
    var users={}
    users.candidateAdd=candidateAdd
    users.recruiterAdd=recruiterAdd
    users.candidate=[]
    users.recruiter=[]
    return users
}
var userss=Users()

 function candidateAdd(name,password,email,level,skills){
    this.candidate.push(candidate(name,password,email,level,skills))
}


function recruiterAdd(name,societe,email,password){
    this.recruiter.push(recruiter(name,societe,email,password))

}


//sign in  //
//verifed mail//
$("#signin").on("click",function(){
    var email = $("#email").val()
    var name = $("#name").val()
    var pass = $("#password").val()
    var checkpass = $("#passwordcheck").val()
    var skills=$('#forworker').val()
    var level=$("#lvl").val()
    var society=$('#forceo').val()
    var regex = /^(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(name === ""){
     $("#alert").text("Please Enter Your Name ")
    }else if(email === ""){
     $("#alert").text("Please Enter Your Email")
    }
 else if(regex.test(pass)===false){
     $("#alert").text("use a strong password")
 }else if (pass !== checkpass ){
     $("#alert").text("pass and check should be the same")
 }else

  if($("#worker").is(':checked')){
      if( skills===''){
        $("#alert").text("Please Enter Your skills")
      }
      if( level===''){
        $("#alert").text("Please Enter Your level")
      }
      userss.candidateAdd(name,pass,email,level,skills)
      var candidats = JSON.stringify(userss.candidate)
      localStorage.setItem('worker', candidats) 
      window.location.href='http://127.0.0.1:5500/log%20in/login.html'
 }

 if($("#recruiter").is(':checked')){
    if(society===''){
        $("#alert").text("Please Enter Your society name")
      }else{
      userss.recruiterAdd(name,society,email,pass)
      var recruiters= JSON.stringify(userss.recruiter)
      localStorage.setItem('recruiter', recruiters)
      window.location.href='http://127.0.0.1:5500/log%20in/login.html'}
      

 }
    
      
 }
)


 


