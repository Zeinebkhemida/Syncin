//login check//
var workers=JSON.parse(localStorage.getItem("worker"))
var employment=JSON.parse(localStorage.getItem("recruiter"))
var arr=workers.concat(employment)

var user=[]
$('#login').on('click',function(){
   
 var emailcheck=$('#email').val()
 var passcheck=$('#password').val()

for(var i=0;arr.length>i;i++){
    if((arr[i].email==emailcheck) && (arr[i].password==passcheck))
    {   
        
        user.slice(1)
        user.push(arr[i])
        var users = JSON.stringify(user)
        localStorage.setItem('CurrentUser', users)
        window.location.href="http://127.0.0.1:5500/main%20page/main.html"
    } 
    
        else {
            $('#alert').text('Please try again ')
        }   
  
    }})


