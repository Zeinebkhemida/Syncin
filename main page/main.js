//helpers
//high order function//
function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i)
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}


function map(array, f) {
    var acc = []
    each(array, function (element, i) {
        acc.push(f(element, i))
    });
    return acc;
}

function filter(array, predicate) {
    var acc = [];
    each(array, function (element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function (element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}

//impoting data the current User infos and the list of worker and recruiter
var currentUser=JSON.parse(localStorage.getItem("CurrentUser"))
var workers=JSON.parse(localStorage.getItem("worker"))
var employment=JSON.parse(localStorage.getItem("recruiter"))
$("#username").text(currentUser[0].name)


//function to hide the posting when user is a worker 
function hidePosting(currentUser){
if(currentUser[0].status==="worker"){
  $(".addpost").css("display","none")
} 
}

//function to hide the apply whene user is recuter
function hideApply(currentUser){
if(currentUser[0].status==="recruiter"){
    $(".apply").text("delete")
    $(".apply").css("background","red")
}}

//generate id
 var i=0
 function idGenerateur(){
    return ++i
 }

 //factory function for the card
    function card(id,img,title,job,location,description){
        return {
            id:id,
            img:img,
            title:title,
            job:job,
            location:location,
            description:description,
        }
    }

//creation of the main object 
function Cards(){
    var cards={}
    cards.cardAdd=cardAdd
    cards.post=!!JSON.parse(localStorage.getItem("posts"))?JSON.parse(localStorage.getItem("posts")):[]
    return cards
}

//add a card into 
function cardAdd(obj){
    this.post.push(obj)
}
//Creation of the instance
var cardss=Cards ()

//inject the main 
injectCards(cardss.post)

 //whene a recuter add a enw post 
$("#postnow").on('click',function(){
    var img=$("#img").val()
    var title=$('#posttitle').val()
    var job=$('#job').val()
    var location=$('#location').val()
    var description=$('#disc').val()
    var id = idGenerateur()
    if(title===''){
        $("#alert").text(" Please add title")
    }
    else if(job===""){
        $("#alert").text(" Please add job")
    }
    else if( location===''){
        $("#alert").text(" Please add location")
    }
    else {
    var element =`<div class="card">
    <img src=${img}>
    <div class="text">
        <h2 id="title">${title}</h2>
        <h3 id="job">${job}</h3>
        <p id="disc">${description}</p>
        <div class="locbtn">
            <div class="location">
                <h4 id="location">${location}</h4>
                <i class="fa-solid fa-location-dot"></i>
            </div>  
            <button class="apply" id=${id} onclick='myfunction(${id})>Apply</button>
        </div>
    </div>
</div>`
 // adding the new card to the instance 
    cardss.cardAdd(card(id,img,title,job,location,description))

    var cards = JSON.stringify(cardss.post)
    localStorage.setItem('posts', cards) 
   // adding the new card to the container
    $(".container").append(element)
    }

 // adding the new card to the localStorage 
    var cards = JSON.stringify(cardss.post)
    localStorage.setItem('posts', cards)
  // Resetinn values of the inputs
    var img=$("#img").val("")
    var title=$('#posttitle').val("")
    var job=$('#job').val("")
    var location=$('#location').val("")
    var description=$('#disc').val("")
})

//funtion of injection
function injectCards(arr){
    each(arr, function (variable) {
            $('.container').append(`<div class="card">
            <img src="${variable.img}">
            <div class="text">
                <h2 id="title">${variable.title}</h2>
                <h3 id="job">${variable.job}</h3>
                <p id="disc">${variable.description}</p>
                <div class="locbtn">
                    <div class="location">
                        <h4 id="location">${variable.location}</h4>
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <button class="apply" >Apply</button>
                </div>
            </div>
        </div> `)
     } )

}

 function myfunction(id){
    each(cardss.post,function(element,index){
        if(id===element.id){
            cardss.post.splice(index,1)
        }
    })
    }  


    







//search 
$("#tosearch").on('click',function(){ 
    $('.container').empty()
    var search= $("#search").val()
    console.log(search)
    var filtred = filter(JSON.parse(localStorage.getItem('posts', cardss.post)),function(element){
return element.title.toUpperCase() == search.toUpperCase() || element.job.toUpperCase() == search.toUpperCase()
    })
    injectCards(filtred)
})


//hiding after injuction 
hideApply(currentUser)
hidePosting(currentUser)